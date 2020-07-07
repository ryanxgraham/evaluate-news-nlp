var dotenv = require('dotenv');
dotenv.config();
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var aylien = require("aylien_textapi");
var cors = require("cors");
const mockAPIResponse = require('./mockAPI.js')

var port = 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'))

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// designates what port the app will listen to for incoming requests
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

//GET REQUESTS
app.get('/', function (req, res) {
  res.sendFile(path.resolve('./dist/index.html'))
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
//POST REQUESTS
app.post('/article', function (req, res) {
  console.log('POST request received');
  console.log(req.body)
  textapi.sentiment({
    url: req.body.text,
    mode: 'document'
  }, function (error, response) {
    console.log('inside post function');
    console.log(response);
    res.send(response)
    if (error === null) {
      console.log('inside error');
      console.log(response);
    }
  })
});
module.exports = app;
