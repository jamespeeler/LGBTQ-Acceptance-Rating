class Business {
  constructor(name, url, img, rating) {
    this.name = name
    this.url = url
    this.img = img
    this.rating = rating
  }
}

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
const businessList = [];

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  console.log(params);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  } else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  } else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  } else if (page == '/api') { //If API is called? Current scenario is when button is pressed.
    if ('business' in params) { //Check to see if the API calls includes business, ex: `/api?business=${businessName}` I assume at least.
      const input = params['business'].toLowerCase().replace("%20", " "); //user input
      console.log(businessList);

      if (input == 'bowtie behavior') { //Clever! Looks like this makes it case-insensitive, fixes spacing.
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        const objToJson = new Business("Bowtie Behavior", "https://www.bowtiebehavior.com/", "https://static.wixstatic.com/media/f25e9b_c67af0e6cb48435abbbf4958f86905fa~mv2.jpg/v1/fill/w_548,h_604,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f25e9b_c67af0e6cb48435abbbf4958f86905fa~mv2.jpg", 10)
        res.end(JSON.stringify(objToJson));
      }
      else if (businessList.some(busi => busi.name === input)) { //If the business is in the list.
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        //Find the index of where it is in the list
        const index = businessList.findIndex(object => {
          return object.name === input;
        });
        //Return it as JSON data
        const objToJson = businessList[index];
        res.end(JSON.stringify(objToJson));
      }
      else if (params['business'] != 'leon') { //If it doesn't exist make a new business
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        const objToJson = new Business(params['business'].toLowerCase().replace("%20", " "), "/", "/", null)
        businessList.push(objToJson);
        res.end(JSON.stringify(objToJson));
      }
    }


  } //else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.write(data);
      res.end();
    });
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

server.listen(8000);