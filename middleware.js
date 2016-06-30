
var middleWare = {
    requireAuthentication: function(req, res, next){
        console.log('Private route hit');
        next();
    },
    logger: function (req, res, next){
        var date = Date().toString();
        console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleWare;