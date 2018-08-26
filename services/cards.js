const axios = require("axios");

const CLASH_API_KEY = process.env.CLASH_API_KEY;

const cardsUrl = () => "https://api.clashroyale.com/v1/cards";
const getCards = async (apiKey = CLASH_API_KEY) =>
  await axios.get(cardsUrl(), {
    headers: { Accept: "application/json", authorization: `Bearer ${apiKey}` }
  });

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
      const cached = await fastify.redis.get("cards");
      if (cached === null) {
        fastify.log.info("Making Clash Royale API ...");
        // Not found in cache
        const response = await getCards();
        const cards = response.data.items;
        const enhancedCards = cardsFactory(cards);
        const cardsString = JSON.stringify(enhancedCards);
        await fastify.redis.set("cards", cardsString); // Cache
        return { cards: enhancedCards };
      } else {
        fastify.log.info("BOOM!!! Cached Cards..");
        return { cards: JSON.parse(cached) };
      }
    } catch (err) {
      fastify.log.error(err.message);
      reply.code(500).send(`Please contact support: ${err.message}`);
    }
  });
};
