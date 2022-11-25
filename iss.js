const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
//callback takes in two params: (error, IP)
const fetchMyIP = function(callback) {
  let apiURL = "https://api.ipify.org/?format=json";
  request(apiURL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    const ipStr = data.ip;
    callback(null, ipStr);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  let apiURL = "http://ipwho.is/" + ip;
  request(apiURL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.success !== true) {
      const msg = `Success status is ${data.success}. Reason: ${data.message}.`;
      callback(Error(msg), null);
      return;
    }
    const latLong = { latitude: data.latitude, longitude: data.longitude };
    callback(null, latLong);
  });
};

const fetchISSFlyOverTimes = function(lL, callback) {
  let apiURL = `https://iss-flyover.herokuapp.com/json/?lat=${lL.latitude}&lon=${lL.longitude}`;
  request(apiURL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching times.`;
      callback(Error(msg), null);
      return;
    }
    let result = [];
    const data = JSON.parse(body);
    for (let key in data.response) {
      result.push(data.response[key]);
    }
    callback(null, result);
  });
};



module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
