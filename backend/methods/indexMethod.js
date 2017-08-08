
// from index.js <-> handlers
// redirects top level url requests  to some methods
// parse URL and POST data

// THIS FILE SERVES ( http://.../v1/...)

var express = require('express')
var indexMethodsRouter = express.Router()
var indexHandler = require('../handlers/indexHandler')

// define the home page route
indexMethodsRouter.get('/', function (req, res) {
  indexHandler.getHome(req).then(function(){
    console.log(getHome_result);
    res.json(getHome_result);
  });
})

// define the about route
indexMethodsRouter.get('/about', function (req, res) {
  indexHandler.getAbout(req).then(function(getAbout_result){
    res.send(getAbout_result);
  });
})

module.exports = indexMethodsRouter;
