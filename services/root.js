module.exports = async function(fastify) {
  fastify.get("/api", async function(request, reply) {
    try {
      // Some promise if u want
      return fastify.massive.listTables();
      // return { serverTime: new Date().toLocaleString() };
    } catch (err) {
      reply.code(500).send(`Please contact support ${err.message}`);
    }
  });
};
