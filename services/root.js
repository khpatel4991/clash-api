const jwt = require("jsonwebtoken");
const axios = require("axios");

const CLASH_API_KEY = process.env.CLASH_API_KEY;

module.exports = async function(fastify, opts, next) {
  fastify.get("/", async function(request, reply) {
    try {
      let cardsString = await fastify.redis.get("cards");
      if (cardsString === null) {
        // Not found in cache
        const url = "https://api.clashroyale.com/v1/cards";
        const headers = {
          Accept: "application/json",
          authorization: `Bearer ${CLASH_API_KEY}`
        };
        const res = await axios.get(url, {
          headers
        });
        cardsString = JSON.stringify(res.data.items);
        await fastify.redis.set("cards", cardsString);
      }
      return JSON.parse(cardsString);
    } catch (err) {
      reply.code(500).send("Please contact support");
    }
  });
};
