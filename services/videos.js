const { getVideos } = require("../fetchApi");

const routeOptions = {
  schema: {
    params: {
      category: { type: "string" }
    }
  }
};

module.exports = async fastify => {
  fastify.get("/api/videos/:category", routeOptions, async (req, reply) => {
    try {
      const category = req.params.category || "";
      const videos = await getVideos(category);
      return { videos };
    } catch (e) {
      fastify.log.error(e.message);
      reply.code(500).send("Something went wrong");
    }
  });
};
