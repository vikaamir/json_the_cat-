const request = require('request');
const readline = require('readline');

const inputBreed = process.argv[2]; // takes data from the commend line

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${inputBreed}`;;// add the data to url to find wha t we need 


request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
  if (error) {
    console.error('Failed to fetch data:', error);
    return;
  }
  
  const data = JSON.parse(body);
  // console.log(data);
  console.log(data[0]["description"])
});

request(apiUrl, (error, response, body) => {// request to the url and pass the data we reserch 
  if (error) {
    console.error('Failed to fetch data:', error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data);
});




