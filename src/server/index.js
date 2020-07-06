var path = require('path');
var express = require('express');
const app = express();
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var requestHandler = require('./requestHandler')
var cors = require('cors')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

//GET REQUESTS
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//POST REQUESTS
app.post('article', requestHandler.validateInput, requestHandler.postHandler)
