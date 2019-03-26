// This file is mainly for bechmarking.
// Use cmd scripts from package.json to boot up the app

// Require the framework and instantiate it
require("dotenv/config");

const fastify = require("fastify")({
  logger: {
    prettyPrint: true
  }
});
const fp = require("fastify-plugin");
const app = require("./app");

// Run the server!
const start = async () => {
  fastify.register(fp(app));
  try {
    await fastify.listen(process.env.PORT, "0.0.0.0");
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
