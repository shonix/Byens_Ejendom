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

app.get('/:id', function(req,res){

    MongoClient.connect(url, function(err, db){
       if(err){
           console.log(err);
           res.status();
           res.send();
       }
       var collection = db.collection('newsletter');
       collection.find({}).toÁrray(function(err, data){
           if(err){
               console.log(err);
               res.status();
               res.send();
           }
           consol.log(data);
           res.send(data)
           db.close();
       })
    });
});

app.post('/', function(req,res){

    MongoClient.connect(url, function(err, db){
        if(err){
            console.log(err);
            res.status();
            res.send();
        }
        var collection = db.collection('newsletter');
        collection.insertOne(req.body, function(err, data){
            if(err){
                console.log(err);
                res.status();
                res.send();
            }
            res.status();
            res.send();
            db.close();
        })
    });
});

app.put('/:id', function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log(err);
            res.status();
            res.send();
        }
        var objectID= new ObjectID(req.params.id);
        var collection = db.collection('newsletter');
        collection.updateOne({"_id":objectID}, {$set:req.body} , function(err, data){
            if(err){
                console.log(err);
                res.status();
                res.send();
            }
            res.status();
            res.send();
            db.close();
        })
    });
});

app.delete('/:id', function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log(err);
            res.status();
            res.send();
        }
        var collection = db.collection('newsletter');
        var objectID= new ObjectID(req.params.id);
        collection.deleteOne({"_id":objectID}, function(err, data){
            if(err){
                console.log(err);
                res.status();
                res.send();
            }
            res.status();
            res.send();
            db.close();
        })
    });
});
app.listen(3000);// set server to listen