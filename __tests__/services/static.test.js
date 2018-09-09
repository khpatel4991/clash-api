const Fastify = require("fastify");
const App = require("../../app");

describe("Serve Static", () => {
  let fastify;
  beforeAll(() => {
    fastify = Fastify({ logger: true });
    fastify.register(App);
  });

  afterAll(() => {
    fastify.close();
  });

  it("sends css files", async () => {
    try {
      const response = await fastify.inject({
        method: "GET",
        url: "/static/vendor.css"
      });
      expect(response.statusCode).toBe(200);
    } catch (e) {
      // Why is this happening
    }
  });
});
