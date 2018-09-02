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
      authorization: `Bearer ${apiKey}`,
    },
  });
};

module.exports = async function(fastify, opts, next) {
  const routeOptions = {
    schema: {
      querystring: {
        playerTag: { type: "string" },
      },
    },
  };
  fastify.get("/player", routeOptions, async function(request, reply) {
    const playerTag = request.query.playerTag || "";
    console.log(`PT`, playerTag);
    try {
      const res = await getPlayer(playerTag);
      const player = res.data;
      return { player };
    } catch (err) {
      return { player: null };
    }
  });
};
