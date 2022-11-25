const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require("./iss");


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

