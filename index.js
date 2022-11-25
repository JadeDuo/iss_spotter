const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!

  for (let obj of passTimes) {
    let dT = new Date;
    dT.setTime(obj.risetime * 1000);
    console.log(`Next pass at ${dT} for ${obj.duration} seconds`);
  }
});


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP("173.181.3.121", (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned latitude is' , data.latitude, "and longitude is", data.longitude);
// });


// fetchISSFlyOverTimes({ latitude: "49.0253085", longitude: "-122.802962" }, (error, times) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned:', times);
// });