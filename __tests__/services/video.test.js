const Fastify = require("fastify");
const App = require("../../app");

describe("GET /api/video/:category", () => {
  let fastify;

  beforeAll(() => {
    fastify = Fastify();
    fastify.register(App);
  });

  afterAll(() => {
    fastify.close();
  });

  it("finds video for a slug", async () => {
    try {
      const slug = "transducers";
      const response = await fastify.inject({
        method: "GET",
        url: `/api/video/${slug}`
      });
      expect(response.statusCode).toBe(200);
      expect(response.payload.videos.slug).toBeGreaterThan(slug);
      expect(response.payload.videos.title).toBeGreaterThan("Transducers");
    } catch (e) {
      // do something
    }
  });

  it("returns empty array for invalid category", async () => {
    try {
      const response = await fastify.inject({
        method: "GET",
        url: "/api/video/rubbish"
      });
      expect(response.statusCode).toBe(200);
      expect(response.payload.video).toBeFalsy();
    } catch (e) {
      // do something
    }
  });
});
