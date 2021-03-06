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
      // if no player tag
      if (playerTag.length === 0) {
        throw new Error("?playerTag=abcd empty");
      }
      const player = await getPlayer(playerTag);
      if (player === null) {
        throw new Error("No Player Found");
      }
      fastify.log.info(
        `Setting Cache for player name ${player.name}. Expires in 2 Hours`
      );
      await fastify.cache.set(
        `player:${player.name}`,
        player,
        2 * 60 * 60 * 1000
      );

      return { player };
    } catch (err) {
      fastify.log.error(err.message);
      return { player: null, error: err.message };
    }
  });
};
