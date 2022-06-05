const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
const PORT = 8000
// const fetch = require('node-fetch');

//This is necessary for API key privacy, the module which lets server.js talk with .env
require('dotenv').config()

//These are modules necessary to make API requests to Yelp Fusion API
const express = require('express')
const cors = require('cors') // We have to include CORS in order to make an API request to Yelp
const app = express()


//This is where the responses from the Yelp Fusion API will be stored. It will always be an array of 5 objects: play with this if you want to play with the API results
let apiResponse;

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  console.log(params);
  
  if (page == '/api') {  //If API is called? Current scenario is when button is pressed.
    /*Check to see if the API calls includes business, ex: `/api?business=${businessName}`*/
    if ('business' in params) {
      /* handle user input */
      const input = params['business'].toLowerCase().replace("%20", " "); //toLower and replace makes it case-insensitive and fixes spacing.
      let location = params['location'].toLowerCase().replace("%20", " ");

      if (location.trim() == "") {
        location = "nyc"
      }
      //START - Yelp Fusion API handling 
      fetch(`https://api.yelp.com/v3/businesses/search?term=${input}&location=${location}&limit=5`, {
          headers: { //These are HTTP headers, apparently important when using APIs
            'Authorization': `Bearer ${process.env.API_KEY}` //API key is hidden in the .env file || BYOA - bring your own API Key
          }
        })
        .then(res => res.json()) //Parse response as JSON etc.
        .then(json => {
          apiResponse = json.businesses; //the data from the API is stored in the 'apiResponse' global variable as an array of 5 objects
          console.log(apiResponse); //you can see what you just received in the terminal
         res.end(JSON.stringify(apiResponse));
        }); 
      //END - Yelp Fusion API handling
      }
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

//These 'app' code blocks are used to get CORS running on our server
app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/products/:id', function (req, res, next) {
  res.json({
    msg: 'This is CORS-enabled for all origins!'
  })
})

//this starts the server //server.listen(8000);
app.listen(process.env.PORT || PORT, () => {
  console.log(`This project can now be accessed on the browser at http://localhost:${PORT}`);
});