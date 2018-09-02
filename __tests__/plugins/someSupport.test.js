const Fastify = require("fastify");
const App = require("../../app");

describe("Some Support Plugin", () => {
  const fastify = Fastify();
  fastify.register(App);
  afterAll(() => {
    fastify.close();
  });

  test("has property some support", async done => {
    try {
      await fastify.ready();
      expect(fastify.someSupport()).toBe("hugs");
      done();
    } catch (e) {
      done();
    }
  });
});
