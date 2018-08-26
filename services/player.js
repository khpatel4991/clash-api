const axios = require("axios");

const CLASH_API_KEY = process.env.CLASH_API_KEY;

const playerUrl = playerTag => {
  const encodedPlayerTag = encodeURIComponent(playerTag);
  return `https://api.clashroyale.com/v1/players/${encodedPlayerTag}`;
};

const getPlayer = async (playerTag, apiKey = CLASH_API_KEY) => {
  const url = playerUrl(playerTag);
  return axios.get(url, {
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${apiKey}`
    }
  });
};

module.exports = async function(fastify, opts, next) {
  const routeOptions = {
    schema: {
      querystring: {
        playerTag: { type: "string" }
      }
    }
  };
  fastify.get("/player", routeOptions, async function(request, reply) {
    const playerTag = request.query.playerTag || "";
    console.log(`PT`, playerTag);
    try {
      const res = await getPlayer(playerTag);
      const player = res.data;
      const playerString = JSON.stringify(player);
      fastify.log.info(player);
      await fastify.redis.hset(
        `players:${playerTag}:trophies`,
        Date.now(),
        player.trophies
      );
      await fastify.redis.set(
        `players:${playerTag}:bestTrophies`,
        player.bestTrophies
      );
      return { player };
    } catch (err) {
      if (err.message === "Request failed with status code 403") {
        fastify.log.error(`Invalid PlayerTag: ${playerTag}`);
        reply.code(422).send(`Invalid PlayerTag: ${playerTag}`);
        return;
      }
      reply.code(500).send(`Please contact support: ${err.message}`);
    }
  });
};
