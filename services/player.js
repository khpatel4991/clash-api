const axios = require("axios");

const CLASH_API_KEY = process.env.CLASH_API_KEY;

module.exports = async function(fastify, opts, next) {
  const routeOptions = {
    schema: {
      querystring: {
        playerTag: { type: "string" }
      }
    }
  };
  fastify.get("/player", routeOptions, async function(request, reply) {
    try {
      const playerTag = request.query.playerTag;
      let playerString = await fastify.redis.hget("players", playerTag);
      if (playerString === null) {
        // Not found in cache
        const encodedPlayerTag = encodeURIComponent(playerTag);
        const url = `https://api.clashroyale.com/v1/players/${encodedPlayerTag}`;
        const headers = {
          Accept: "application/json",
          authorization: `Bearer ${CLASH_API_KEY}`
        };
        const res = await axios.get(url, {
          headers
        });
        playerString = JSON.stringify(res.data);
        await fastify.redis.hset("players", playerTag, playerString);
      }
      return JSON.parse(playerString);
    } catch (err) {
      fastify.log.error(err.message);
      reply.code(500).send("Please contact support");
    }
  });
};
