const axios = require("axios");

const CLASH_API_KEY = process.env.CLASH_API_KEY;

const clanUrl = clanTag => {
  const encodedClanTag = encodeURIComponent(clanTag);
  return `https://api.clashroyale.com/v1/clans/${encodedClanTag}`;
};

const getClan = async (clanTag, apiKey = CLASH_API_KEY) => {
  try {
    const url = clanUrl(clanTag);
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

module.exports = getClan;
