const express = require('express')
const bodyParser = require('body-parser');
const indexMethod = require("./rest/methods/indexMethod");

const app = express();

// the cors() was being dumb...
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
});

app.use('/v1', indexMethod);

app.get('/v2', function (req, res){
  res.send("Hello v2!");
});

app.listen(3001, function () {
  console.log('gleb-react-server running on localhost:3001')
})
