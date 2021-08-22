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
  // We are using object destructuring on the data parameter because
  // we only need to grab the latitude and logitude data from the geocode data
  // By default we need to set the destructure object to an empty object
    geocode(address, (error, { latitude, longitude, location } = {}) => {
      if(error)
      {
        return console.log(error);
      }
    
      // We only need to grab three pieces of data from the data returned from the weather stack API.
      // We can dictate that with object destructuring
      forecast(latitude, longitude, (error, {weather_description, temperature, feelslike}) => {
        if(error)
        {
          return console.log(error);
        }
        
        console.log("Location: " + location);
        console.log(weather_description + ". It is currently " + temperature + " degrees out. It feels like " + feelslike + " degrees out.");
      });
  });
}