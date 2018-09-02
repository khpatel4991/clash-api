const axios = require("axios");

const CLASH_API_KEY = process.env.CLASH_API_KEY;

const getCards = async (apiKey = CLASH_API_KEY) => {
  const response = await axios.get("https://api.clashroyale.com/v1/cards", {
    headers: { Accept: "application/json", authorization: `Bearer ${apiKey}` }
  });
  const cards = response.data.items;
  const enhancedCards = cardsFactory(cards);
  return enhancedCards;
};

const getRarity = maxLevel => {
  if (maxLevel === 13) return "Common";
  if (maxLevel === 11) return "Rare";
  if (maxLevel === 8) return "Epic";
  if (maxLevel === 5) return "Legendary";
  return "N/A";
};
const cardsFactory = cards =>
  cards.map(card => {
    const rarity = getRarity(card.maxLevel);
    return { ...card, rarity };
  });

module.exports = async function(fastify, opts, next) {
  fastify.get("/cards", async function(request, reply) {
    try {
      const cached = await fastify.cache.get("cards");
      if (cached === null) {
        fastify.log.info("Cache Miss for cards, Fetching and setting");
        const cards = await getCards();
        fastify.log.info("GOt cards from api, setting cache");
        await fastify.cache.set("cards", cards, 10000);
        return { cards };
      }
      fastify.log.info("Cached Cards");
      return cached.item;
    } catch (err) {
      fastify.log.error(err.message);
      reply.code(500).send(`Please contact support: ${err.message}`);
    }
  });
};
