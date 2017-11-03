// Importing Node modules and initializing Express
const express = require('express'),  
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      config = require('./app/config/config'),
      router = require('./app/router'),
      mongoose = require('mongoose'),
      path=require('path');

//initialize mongoose
mongoose.set('debug', config.mongooseDebug);
mongoose.Promise=global.Promise
mongoose.connect(config.database,{useMongoClient: true});

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/ui'));
app.use(express.static(path.join(__dirname, 'public')));      
// Start the server
const server = app.listen(config.port);  
console.log('Your server is running on port ' + config.port + '.');  

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// Setting up bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

router(app);