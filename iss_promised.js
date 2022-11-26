const request = require('request-promise-native');

const fetchMyIP = function() {
  const apiURL = "https://api.ipify.org/?format=json";
  return request(apiURL);
};

const fetchCoordsByIP = function(ipObj) {
  const data = JSON.parse(ipObj);
  const ip = data.ip;
  const apiURL = `http://ipwho.is/${ip}`;
  return request(apiURL);
};

const fetchISSFlyOverTimes = function(body) {
  const data = JSON.parse(body);
  let apiURL = `https://iss-flyover.herokuapp.com/json/?lat=${data.latitude}&lon=${data.longitude}`;
  return request(apiURL);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      let result = [];
      const data = JSON.parse(body);
      for (let key in data.response) {
        result.push(data.response[key]);
      }
      return result;
    });
};


module.exports = { nextISSTimesForMyLocation };