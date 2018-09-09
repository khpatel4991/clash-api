const { getPlayer } = require("../fetchApi");

const routeOptions = {
  schema: {
    querystring: {
      playerTag: { type: "string" }
    }
  }
};

module.exports = async function(fastify) {
  fastify.get("/api/player", routeOptions, async function(request, reply) {
    const playerTag = request.query.playerTag || "";
    try {
      const player = await getPlayer(playerTag);
      return { player };
    } catch (err) {
      fastify.log.error(err.message);
      reply.code(500).send(`Please contact support: ${err.message}`);
    }
  });
};
