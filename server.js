var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var express = require('express');
var app = express();
var BodyParser = require('body-parser')

var url = 'mongodb://localhost:27017/byensejendom';

app.use(BodyParser.urlencoded({
    extended : true
}));
app.use(BodyParser.json());

//MongoDB
//use byensejendom
//db.newsletter.find()

app.get('/', function(req,res){

    MongoClient.connect(url, function(err, db){
       if(err){
           console.log(err);
           res.status(500);
           res.send();
       }
       var collection = db.collection('newsletter');
       collection.find({}).toArray(function(err, data){
           if(err){
               console.log(err);
               res.status(500);
               res.send();
           }
           else{
               console.log(data);
               res.status(200);
               res.send(data)
           }
           db.close();
       })
    });
});

//MongoDB
//use byensejendom
//db.newsletter.insert({})

app.post('/', function(req,res){

    MongoClient.connect(url, function(err, db){
        if(err){
            console.log(err);
            res.status(500);
            res.send();

        }
        var collection = db.collection('newsletter');
        collection.insertOne(req.body, function(err, data){
            if(err){
                console.log(err);
                res.status(500);
                res.send();
            }
            else{
                res.status(201);
                res.send();
            }
            db.close();
        })
    });
});


//MongoDB
//use byensejendom
//db.newsletter.update({}, {$set: {}})

app.put('/:id', function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log(err);
            res.status(500);
            res.send();
        }
        var objectID= new ObjectID(req.params.id);
        var collection = db.collection('newsletter');
        collection.updateOne({"_id":objectID}, {$set:req.body} , function(err, data){
            if(err){
                console.log(err);
                res.status(500);
                res.send();
            }
            else{
                res.status(200);
                res.send();
            }
            db.close();
        })
    });
});

//MongoDB
//use byensejendom
//db.newsletter.remove({})

app.delete('/:id', function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log(err);
            res.status(500);
            res.send();
        }
        var collection = db.collection('newsletter');
        var objectID= new ObjectID(req.params.id);
        collection.deleteOne({"_id":objectID}, function(err, data){
            if(err){
                console.log(err);
                res.status(500);
                res.send();
            }
            else{
                res.status(200);
                res.send();
            }
            db.close();
        })
    });
});

//Make use of more than one js file
//var users = require('./routes/users.js');
//app.use('/api/', users);
//router.route('/users/')
//.get(function(req, res) {
//module.exports = router; -->require

//static access
//app.use(express.static('public'));
//http://localhost:3000/images/kitten.jpg





app.listen(3000);// set server to listen