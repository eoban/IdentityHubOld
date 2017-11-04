const ejs=require('ejs'),
        baseUrl=require('../utils/baseUrl'),
        request=require('request');

exports.showLoginPlugin=function(req,res,next){
    res.render('loginPlugin',{msg: req.query.msg,callbackUrl: req.query.callbackUrl});
}

exports.processLoginPlugin=function(req,res,next){

    let reqOpts={
        uri: baseUrl(req)+'/api/auth/token',
        method: 'POST',
        json:{
            email: req.body.email,
            password: req.body.password
        }
    }
    request.post(reqOpts,function(error,response,body){
        if (!error && response.statusCode==200){
            return res.redirect(req.body.callbackUrl+'?token='+body.token);
        }
        else
            res.redirect(baseUrl(req)+'/ui/login?callbackUrl='+req.body.callbackUrl+'&msg=' + response.body.error)
    })
   
}
