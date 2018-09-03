module.exports = async function(fastify) {
  fastify.get("/", async function(request, reply) {
    try {
      // Some promise if u want
      return { serverTime: new Date().toLocaleString() };
    } catch (err) {
      reply.code(500).send(`Please contact support ${err.message}`);
    }
  });
};
