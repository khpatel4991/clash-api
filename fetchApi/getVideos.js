const fakeDelay = (ms = 1000) => new Promise(res => setTimeout(res, ms));

const {
  fpVideos,
  reactReduxVideos,
  dbGraphqlVideos
} = require("../fixtures/videos");

module.exports = async category => {
  await fakeDelay(1000);
  switch (category) {
    case "fp":
      return fpVideos;
    case "react-redux":
      return reactReduxVideos;
    case "db-graphql":
      return dbGraphqlVideos;
    default:
      return [];
  }
};

// export const findVideo = async (slug, jwToken) => {
//   await fakeDelay(500);
//   if (!jwToken) return null; // TRY: set the cookie === ''

//   return allVideos.find(video => video.slug === slug);
// };
