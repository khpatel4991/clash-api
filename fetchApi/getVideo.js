const { allVideos } = require("../fixtures/videos");

const fakeDelay = (ms = 1000) => new Promise(res => setTimeout(res, ms));

module.exports = async slug => {
  await fakeDelay(500);
  return allVideos.find(video => video.slug === slug) || null;
};
