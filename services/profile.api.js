module.exports = async function(fastify) {
  fastify.get("/api/profile/:playerName", async request => {
    fastify.log.info(`Player Name is ${request.params.playerName}`);
    const profile = await fastify.cache.get(
      `player:${request.params.playerName}`
    );
    if (profile) return { profile: profile.item };
    // Do something, fectch from persistence. TimescaleDB
    return { profile: null };
  });
};
