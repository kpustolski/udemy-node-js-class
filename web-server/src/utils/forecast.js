const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=[your api kay]&query=" + latitude + "," + longitude + "&units=f";
  request({ url: url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined);
    }
    else if (body.error) {
      callback("Unable to find the location!", undefined);
    }
    else {
      callback(undefined, {
        weather_description: body.current.weather_description[0],
        temperature: body.current.temperature,
        feelslike: body.current.feelslike
      });
    }
  });
}

module.exports = {
  forecast: forecast
};