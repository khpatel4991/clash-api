const { getPlayer } = require("../fetchApi");

const routeOptions = {
  schema: {
    params: {
      playerName: { type: "string" }
    }
  }
};

const buildProfile = async player => {
  return Promise.resolve(player);
};

module.exports = async function(fastify) {
  fastify.get("/api/profile/:playerName", routeOptions, async function(
    request,
    reply
  ) {
    const playerName = request.params.playerName || "";
    // get tag from name, redis lookup
    try {
      const player = await getPlayer("#2YR0YURJV");
      const profile = await buildProfile(player);
      return { profile };
    } catch (err) {
      fastify.log.error(err.message);
      reply.code(500).send(`Please contact support: ${err.message}`);
    }
  });
};
