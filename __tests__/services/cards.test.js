const Fastify = require("fastify");
const App = require("../../app");

describe("GET /cards", () => {
  const fastify = Fastify();
  fastify.register(App);
  afterAll(() => {
    fastify.close();
  });

  test("Get list of cards", async done => {
    try {
      const res = await fastify.inject({
        method: "GET",
        url: "/cards",
      });
      expect(res.statusCode).toBe(200);
      const { cards } = JSON.parse(res.payload);
      cards.forEach(card => {
        expect(card).toHaveProperty("id");
        expect(card).toHaveProperty("name");
        expect(card).toHaveProperty("maxLevel");
        expect(card).toHaveProperty("rarity");
      });
      done();
    } catch (e) {
      console.log(e.message);
      done();
    }
  });
});
