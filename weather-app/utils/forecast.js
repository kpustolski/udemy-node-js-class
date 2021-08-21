const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=[your api kay]&query=" + latitude + "," + longitude + "&units=f";
    request({ url: url, json: true}, (error, response) => {
      if(error)
      {
        callback("Unable to connect to the weather service!", undefined);
      } 
      else if(response.body.error)
      {
        callback("Unable to find the location!", undefined);
      }
      else
      {
        callback(undefined, {
          weather_description: response.body.current.weather_description[0],
          temperature: response.body.current.temperature,
          feelslike: response.body.current.feelslike
        });
      }
    });
  }

  module.exports = {
      forecast: forecast
  };