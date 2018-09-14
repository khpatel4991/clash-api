module.exports = async function(fastify) {
  fastify.get("/api", async function(request, reply) {
    try {
      // Some promise if u want
      // const app = "<div>Some Component</div>";
      return { serverTime: new Date().toLocaleString() };
    } catch (err) {
      reply
        .code(500)
        .send(`We are down. Please contact support ${err.message}`);
    }
  });
};
