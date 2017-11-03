const ejs=require('ejs'),
        request=require('request'),
        config=require('../config/config');

exports.showLoginPlugin=function(req,res,next){
    res.render('loginPlugin',{msg: ""});
}
exports.processLoginPlugin=function(req,res,next){
    let reqOpts={
        uri: config.baseUrl+'/api/auth/token',
        method: 'POST',
        json:{
            email: req.body.email,
            password: req.body.password
        }
    }
    request.post(reqOpts,function(error,response,body){
        if (!error && response.statusCode==200){
            return res.redirect('/ui/happylanding?token='+body.token);
        }
        else
            res.render('loginPlugin',{msg: body.error});
    })
   
}
exports.happyLanding=function(req,res,next){    
    //we do nothing here except hope the app using us can 
    //recognize that we are here and extract the token locally
    res.send('Authenticating...');
}