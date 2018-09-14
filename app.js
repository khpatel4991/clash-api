"use strict";

const path = require("path");
const AutoLoad = require("fastify-autoload");
const Redis = require("ioredis");

const generateTemplate = require("./client/generateTemplate").default;

console.log(generateTemplate);

const redis = new Redis();
const abcache = require("abstract-cache")({
  useAwait: true,
  driver: {
    name: "abstract-cache-redis",
    options: { client: redis }
  }
});

module.exports = function(fastify, opts, next) {
  // Place here your custom code!
  fastify.register(require("fastify-helmet"));
  fastify.register(require("fastify-response-time"));
  fastify.register(require("fastify-cookie"));
  fastify.register(require("fastify-redis"), { client: redis });
  fastify.register(require("fastify-caching"), { cache: abcache });
  fastify.register(require("fastify-no-icon"));

  fastify.register(require("fastify-cors"), {
    origin: /http:\/\/(localhost|127\.0\.0\.1):3000/,
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"]
  });

  fastify.addHook("onSend", async (request, reply, payload) => {
    try {
      const contentType = reply.getHeader("Content-Type");
      fastify.log.info(contentType !== "application/json");
      if (contentType && contentType !== "application/json") {
        return payload;
      }
      if (JSON.parse(payload).statusCode !== 404) {
        return payload;
      }
      // eslint-disable-line import/no-unresolved
      // app.use(serverRender({ clientStats, outputPath }))
      fastify.log.info("URL NOT FOUND, Generating Template", request.raw.url);
      const richTemplate = await generateTemplate(request, reply);
      reply.code(200).type("text/html");
      return richTemplate;
    } catch (e) {
      reply.code(500);
      fastify.log.warn(`Content Type is ${reply.getHeader("Content-Type")}`);
      fastify.log.error(
        `Syntax Error: ${e instanceof SyntaxError}, Error for path ${
          request.raw.url
        }, Message: ${e.message}`
      );
      return JSON.stringify({ error: e.message });
    }
    // next(null, JSON.stringify({ hijack: true }));
  });

  fastify.register(require("fastify-static"), {
    root: path.join(__dirname, "/static"),
    prefix: "/static"
  });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins")
  });

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "services"),
    options: { prefix: "/" }
  });

  // Make sure to call next when done
  next();
};
