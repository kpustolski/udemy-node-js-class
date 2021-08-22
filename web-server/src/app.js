const express = require('express');
const app = express();

// We can congfigure what the server should do when someone tries to get the 
// resource at a specific URL
// Takes two arguments: 
// - request (req): Contains info about the incoming request to the server
// - response (res): Contains methods to customize what we send back to the requester
// '' stands for the home page (ie. index)
app.get('', (req, res)=>{
  // What do we want to do if the user visits the home page?
  // We can use send() to send something back to the 
  // Hello Express will appear as text in the browser window.
  res.send('Hello Express');
});

// /help is the help page eg. app.com/help
app.get('/help', (req, res) => {
  res.send('Help page');
});

// /about page
app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/weather', (req, res) => {
  res.send('Weather page');
});

// Start up the server
app.listen(3000, () => {
  // What happens when the server is up and running?
  // This will print to the terminal
  console.log('Server is up on port 3000');
});
