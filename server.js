var express = require('express');
var app = express();
var PORT = process.env.PORT;


// app.get('/', function(req, res){
//     res.send('Hello Express');  
// });

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
}

app.use(middleWare.logger);

app.get('/about', middleWare.requireAuthentication, function(req, res){
    res.send('About Us!!');  
});

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

//Not reserved
app.listen(PORT, process.env.IP, function(){
  console.log("Express server started on port " + PORT + '!');
 });
