const jwt = require("jsonwebtoken");
const axios = require("axios");

const CLASH_API_KEY = process.env.CLASH_API_KEY;

module.exports = async function(fastify, opts, next) {
  fastify.get("/", async function(request, reply) {
    try {
      let cardsString = await fastify.redis.get("cards");
      if (cardsString === null) {
        // Not found in cache
        return { cards: false };
      }
      return { cards: true, serverTime: new Date() };
    } catch (err) {
      reply.code(500).send(`Please contact support ${err.message}`);
    }
  });
};
