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

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
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
  } else if (page == '/api') {
    if ('business' in params) {

      if (params['business'].toLowerCase().replace("%20", " ") == 'bowtie behavior') {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        const objToJson = new Business("Bowtie Behavior", "https://www.bowtiebehavior.com/", "https://static.wixstatic.com/media/f25e9b_c67af0e6cb48435abbbf4958f86905fa~mv2.jpg/v1/fill/w_548,h_604,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f25e9b_c67af0e6cb48435abbbf4958f86905fa~mv2.jpg", 10)
        res.end(JSON.stringify(objToJson));
      } else if (params['business'] != 'leon') {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        const objToJson = new Business("Unknown", "/", "/", null)
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