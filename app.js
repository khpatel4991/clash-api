"use strict";

const path = require("path");
const AutoLoad = require("fastify-autoload");
const Redis = require("ioredis");

const redis = new Redis(process.env.REDIS_URL);
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
