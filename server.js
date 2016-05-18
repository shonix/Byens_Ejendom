var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var express = require('express');
var app = express();
var BodyParser = require('body-parser')

var url = 'mongodb://localhost:27017/byensejendom/newsletter';

app.use(BodyParser.urlencoded({
    extended : true
}));
app.use(BodyParser.json());

app.get('/:id', function(req,res){

});

app.post('/', function(req,res){

});

app.put('/:id', function(req, res){

});

app.delete('/:id', function(req, res){

});