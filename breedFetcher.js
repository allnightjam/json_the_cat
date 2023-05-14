const request = require('request');
const catName = process.argv[2];
const web = "https://api.thecatapi.com/v1/breeds/search?q=" + catName;

request(web, (error, response, body) => {
  const data = JSON.parse(body);
  const description = data[0].description;
  console.log(description);
});

// console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

