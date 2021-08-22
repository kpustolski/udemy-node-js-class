const http = require('http');

const url = "http://api.weatherstack.com/current?access_key=[your api kay]&query=40,-75&units=f";

const request = http.request(url, (response) => {
    
    let data = '';

    // Allows us to register a handler for when the data is received
    // The chunk parameter represents the data we receive. It cann be all of the data 
    // or only a part of it. These two response calls can fire more than once in order
    // to get all of the data.
    response.on('data', (chunk) => {
        // The chunk is returned in bytes and needs to be converted over 
        // to a string
        data = data + chunk.toString();
        
    });

    response.on('end', () => {
        // Data is a string. We need to make it into JSON.
        const body  = JSON.parse(data);
        console.log(body);
    });

});

// Error handling
request.on('error', (error) => {
    console.log("An error: " + error);
});

// This shows that we are done setting up our request
// and that we can send it off
request.end();