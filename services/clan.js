const { getClan } = require("../fetchApi");

const routeOptions = {
  schema: {
    querystring: {
      clanTag: { type: "string" }
    }
  }
};

module.exports = async function(fastify) {
  fastify.get("/api/clan", routeOptions, async function(request, reply) {
    const clanTag = request.query.clanTag || "";
    try {
      if (clanTag.trim().length === 0) {
        reply.code(404).send({ clan: null });
        return;
      }
      const clan = await getClan(clanTag);
      return { clan };
    } catch (err) {
      fastify.log.error(err.message);
      reply.code(500).send(`Please contact support: ${err.message}`);
    }
  });
};
