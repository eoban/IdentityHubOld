const express = require('express'),
      loginPlugin=require('./ui/loginPlugin'),
      authController=require('./api/auth/authController'),
      devController=require('./api/dev/devController'),
      path=require('path');

module.exports = function(app) {  
// Initializing route groups
const apiRoutes = express.Router(),
      authRoutes = express.Router(),
      uiRoutes=express.Router(),
      devRoutes=express.Router();



uiRoutes.get('/login',loginPlugin.showLoginPlugin);
uiRoutes.post('/login',loginPlugin.processLoginPlugin);
uiRoutes.get('/happylanding',loginPlugin.happyLanding);
// /api/auth/register
authRoutes.post('/register', authController.register);
// /api/auth/token
authRoutes.post('/token', authController.token);
// /api/auth/authorize
authRoutes.get('/authorize',authController.authorize);
// /api/auth/providerToken
authRoutes.get('/providerToken',authController.providerToken)

devRoutes.get('/reset',devController.reset);

apiRoutes.use('/auth', authRoutes);



app.use('/api', apiRoutes);
app.use('/ui',uiRoutes);
app.use('/dev',devRoutes);
};