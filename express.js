/**
 * Created by Elinor-skole on 11-03-2016.
 */
var express = require('express');
var app = express();
//app.use(express.static('public'))//looks in public folder

app.set('view engine', 'ejs')// req esj installed, finde sites in view folder

app.get('/', function(req, res){// blanck request(localhoste:3000(/))
    var obj1={
        name : 'elinor',
        title : 'index'
    }
    res.render('index',obj1);//send object to page, show about from views folder
});
app.get('/about', function(req, res){
    var obj2={
        name : 'elinor',
        title : 'about'
    }
    res.render('about',obj2);
})
app.get('/contact', function(req, res){
    var obj3={
        name : 'elinor',
        title : 'contact'
    }
    res.render('contact',obj3);
})
app.listen(3000);// set server to listen