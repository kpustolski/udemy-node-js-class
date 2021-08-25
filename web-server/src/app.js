const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

//Define paths for Express config
const publicDirPath = path.join( __dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');
const partialPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Katie'
    })
});
// /help is the help page eg. app.com/help
app.get('/help', (req, res) => {
  res.render('help', {
      title: "Help",
      name: 'Katie',
      description: "This is a sentance to help."
  })
});

// /about page
app.get('/about', (req, res) => {
  res.render('about', {
      title: 'About Me',
      name: 'Katie'
  })
});

app.get('/weather', (req, res) => {
  res.send({
    forcast: "it is snowing",
    location: "Philadelphia"
  });
});

app.get('/help/*', (req, res) => {
    res.render( '404', {
        title: "404",
        message: "Help article not found.",
        name: 'Katie Pustolski'
    });
});

app.get('*', (req, res) => {
    res.render( '404', {
        title: "404",
        message: "Page not found",
        name: 'Katie Pustolski'

    });
});
// Start up the server
app.listen(3000, () => {
  // What happens when the server is up and running?
  // This will print to the terminal
  console.log('Server is up on port 3000');
});
