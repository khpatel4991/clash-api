const { getVideo } = require("../fetchApi");

const routeOptions = {
  schema: {
    params: {
      slug: { type: "string" }
    }
  }
};

module.exports = async fastify => {
  fastify.get("/api/video/:slug", routeOptions, async (req, reply) => {
    try {
      const slug = req.params.slug || "";
      const video = await getVideo(slug);
      return { video };
    } catch (e) {
      fastify.log.error(e.message);
      reply.code(500).send("Something went wrong");
    }
  });
};
