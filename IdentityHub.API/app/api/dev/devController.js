const User=require('../../models/user'),
        config=require('../../config/config'),
        request=require('request');


exports.reset=function(req,res,next){
    seedUsersCollection();
    res.send('<h1>resetData complete</h1>')
}

function seedUsersCollection() {
    User.collection.drop().then(function () {
        request({
            uri: config.baseUrl+'/api/auth/register',
            method: 'POST',
            json:{
                email: 'gsilber@cyberdaptive.com',
                password: 'test'
            }
        });
    });
}