const { test } = require("tap");
const Fastify = require("fastify");
const Redis = require("../../plugins/redis");
const App = require("../../app");

describe("Index Route", () => {
  const fastify = Fastify();
  fastify.register(App);
  afterAll(() => {
    fastify.close();
  });

  test("has redis attached", async done => {
    await fastify.ready();
    expect(fastify.redis()).toHaveProperty("get");
    // t.equal(fastify.someSupport(), "hugs");
    // t.equal();
    done();
  });
});
