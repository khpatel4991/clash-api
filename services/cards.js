const { getCards } = require("../fetchApi");

module.exports = async function(fastify) {
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
