const forecast = require("./utils/forecast.js");
const geocode = require("./utils/geocode.js");

// We can use a command line argument to take in a location from the user
const address = process.argv[2];

if(!address)
{
  console.log('Please provide an address.');
}
else
{
  // This stays in app.js
  geocode(address, (error, data)=> {
      if(error)
      {
        return console.log(error);
      }
      
      forecast(data.latitude, data.longitude, (error, forecastdata) => {
        if(error)
        {
          return console.log(error);
        }
        
        console.log("Location: " + data.location);
        console.log(forecastdata.weather_description + ". It is currently " + forecastdata.temperature + " degrees out. It feels like " + forecastdata.feelslike + " degrees out.");
      });
  });
}