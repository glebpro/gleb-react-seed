
// from methods <-> handlers
// recieves parsed URl/POST data and does validation or additional parsing
// that requires more data fetched


var indexHandler = {};
var indexModel = require('../models/indexModel');

indexHandler.getHome = function(req){
  return new Promise(function(resolve, reject){
    // parse URLs/POST data
    var params = {};
    resolve(params);
  }).then(function(params){
    // go to model
    indexModel.getHomeModel(params).then(function(model){
      return model;
    });
  });
};

module.exports = indexHandler;
