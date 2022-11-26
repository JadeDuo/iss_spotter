const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((times) => {
    for (let obj of times) {
      let dT = new Date;
      dT.setTime(obj.risetime * 1000);
      console.log(`Next pass at ${dT} for ${obj.duration} seconds`);
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });


