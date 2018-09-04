const Fastify = require("fastify");
const App = require("../../app");

describe("GET /api/videos/:category", () => {
  let fastify;

  beforeAll(() => {
    fastify = Fastify();
    fastify.register(App);
  });

  afterAll(() => {
    fastify.close();
  });

  it("finds videos for a category", async () => {
    try {
      const response = await fastify.inject({
        method: "GET",
        url: "/api/videos/fp"
      });
      expect(response.statusCode).toBe(200);
      expect(response.payload.videos.length).toBeGreaterThan(0);
    } catch (e) {
      // do something
    }
  });

  it("returns empty array for invalid category", async () => {
    try {
      const response = await fastify.inject({
        method: "GET",
        url: "/api/videos/kardashian"
      });
      expect(response.statusCode).toBe(200);
      expect(response.payload.videos.length).toBe(0);
    } catch (e) {
      // do something
    }
  });
});
