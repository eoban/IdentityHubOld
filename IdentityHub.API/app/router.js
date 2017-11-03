const express = require('express');

module.exports = function(app) {  
// Initializing route groups
const apiRoutes = express.Router(),
      authRoutes = express.Router(),
      uiRoutes=express.Router();

apiRoutes.use('/auth', authRoutes);
apiRoutes.use('/ui',uiRoutes);
// /api/auth/register
//authRoutes.post('/register', AuthenticationController.register);
// /api/auth/login
//authRoutes.post('/login', AuthenticationController.login);
// /api/auth/authorize
//authRoutes.get('/authorize',passportService.requireAuth,AuthenticationController.authorize);
app.use('/api', apiRoutes);
};