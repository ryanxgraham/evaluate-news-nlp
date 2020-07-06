var dotenv = require('dotenv');
dotenv.config();

function validateInput(req, res) {
  if(req.body.text) {
    return res.status(200).json({
      message: 'Success'
    })
  } else {
    return.res.status(400).json({
      message: 'Invalid Input'
    })
  }
}

function postHandler(req, res) {
  var aylien = require("aylien_textapi");
  var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });
  textapi.sentiment({
    'url' : req.body.text
  }, function (error, response) {
    res.send(response)
  });
}

export { validateInput, postHandler }
