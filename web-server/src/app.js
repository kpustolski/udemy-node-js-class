const express = require('express');
const path = require('path');
const app = express();

//Route path to index.html
const publicDirPath = path.join( __dirname, '../public');
app.use(express.static(publicDirPath));

// /help is the help page eg. app.com/help
app.get('/help', (req, res) => {
  res.send('Help page');
});

// /about page
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    forcast: "it is snowing",
    location: "Philadelphia"
  });
});

// Start up the server
app.listen(3000, () => {
  // What happens when the server is up and running?
  // This will print to the terminal
  console.log('Server is up on port 3000');
});
