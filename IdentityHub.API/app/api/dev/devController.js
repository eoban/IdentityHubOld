const User=require('../../models/user'),
        config=require('../../config/config'),
        baseUrl=require('../../utils/baseUrl'),
        request=require('request');


exports.reset=function(req,res,next){
    seedUsersCollection(baseUrl(req));
    res.send('<h1>resetData complete</h1>')
}

function seedUsersCollection(baseURI) {
    User.collection.drop().then(function () {
        request({
            uri: baseURI+'/api/auth/register',
            method: 'POST',
            json:{
                email: 'gsilber@cyberdaptive.com',
                password: 'test'
            }
        });
    });
}