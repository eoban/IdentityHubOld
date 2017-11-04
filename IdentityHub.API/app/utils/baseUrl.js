module.exports=function(req){
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    return fullUrl.substring(0,fullUrl.indexOf("/ui"));
}