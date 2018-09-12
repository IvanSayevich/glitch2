// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp/", function (req, res) {
  let utc;
  let unix;
  let date = new Date();
  unix = date.getTime();
  utc = date.toUTCString();
  res.json({"unix": unix, "utc": utc});
});


app.get('/api/timestamp/:time', (req, res) => {
  let data = req.params.time;
  let utc;
  let unix;
  let date = new Date(data);
  console.log(typeof data ==='string');
  if (data === 'Invalid Date'){
    unix = null;
    utc = 'Invalid Date';
  }else {
    unix = date.getTime();
    utc = date.toUTCString();
  }
  res.json({"unix": unix, "utc": utc})});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});