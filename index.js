const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// request(web, (error, response, body) => {
//   const fetchBreedDescription = function(breedName, callback){
//     if (error) {
//       callback("error", null);
//     } else if (breedName === null) {
//       console.log("error");
//     } else {
//       callback(null, breedName.description);
//     }
//   }
//   const data = JSON.parse(body);
//   const description = data[0].description;
//   console.log(description);
// });