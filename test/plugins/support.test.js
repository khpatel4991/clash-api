const { test } = require("tap");
const Fastify = require("fastify");
const Support = require("../../plugins/someSupport");

test("support works standalone", async t => {
  console.info(t);
  const fastify = Fastify();
  fastify.register(Support);

  await fastify.ready();
  t.equal(fastify.someSupport(), "hugs");
  t.equal();
});
