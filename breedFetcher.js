const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
//add the data to url to find what we need
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {// request to the url and pass the data we reserch\
    if (error) {
      callback(error, null)
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, "This breed does not exist.");
      } else {
        callback(null, data[0]["description"]);
      }
    }
  });
};
module.exports = { fetchBreedDescription };
