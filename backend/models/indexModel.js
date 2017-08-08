
// from handlers <-> models
// organize the data in and out of processing/storage

var indexModel = {};

indexModel.getHomeModel = function(params){
  return new Promise(function(resolve, reject){
    resolve({ 'message': 'Hello from the home page!'});
  });
}

module.exports = indexModel;
