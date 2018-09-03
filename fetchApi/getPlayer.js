const axios = require("axios");

const CLASH_API_KEY = process.env.CLASH_API_KEY;

const playerUrl = playerTag => {
  const encodedPlayerTag = encodeURIComponent(playerTag);
  return `https://api.clashroyale.com/v1/players/${encodedPlayerTag}`;
};

const getPlayer = async (playerTag, apiKey = CLASH_API_KEY) => {
  try {
    const url = playerUrl(playerTag);
    const res = await axios.get(url, {
      headers: {
        Accept: "application/json",
        authorization: `Bearer ${apiKey}`
      }
    });
    return res.data;
  } catch (e) {
    return null;
  }
};

module.exports = getPlayer;
