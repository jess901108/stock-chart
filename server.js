var express = require('express'),
path = require('path'),
exphbs = require('express-handlebars'),
app = express();
var port = process.env.PORT || 8080;

// View engine
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout: 'layout'}));
app.set('view engine','handlebars');

// Set up static files
app.use(express.static(path.join(__dirname,'public')));

app.use("/",function(req,res){
    res.render('index');
});

app.listen(port,function(){
    console.log("server is running at port: "+port);
})