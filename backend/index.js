const express = require('express')
const cors = require('cors');
const indexMethod = require("./methods/indexMethod");

const app = express()

const corsOptions = {
  preflightContinue: true,
};

app.use(cors(corsOptions));

app.use('/v1/', indexMethod);

app.get('/v2/', function (req, res){
  res.send("Hello v2!");
});

app.listen(3001, function () {
  console.log('gleb-react-server running on localhost:3001')
})
