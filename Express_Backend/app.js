var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hyper';

mongo.connect(url, (err)=>{
    console.log('database connect!')
})

app.get('/data', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('signal');
        var col=db.collection('checkgas');
        col.find({}).toArray((x,rep)=>{
            res.send(rep);
        })
        collection.find({}).toArray((x, result)=>{
            res.send(result);
        })
    })
})

app.post('/data', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('signal');
        var col=db.collection('checkgas');
        var gaslist={
            check1:req.body.check1,
            check2:req.body.check2,
        }
        col.insert(gaslist, (x, rep)=>{
            res.send(rep);
        })

        var sesuatu = {
            name: req.body.name,
            usia: req.body.usia
        }
        collection.insert(sesuatu, (x, result)=>{
            res.send(result);
        })
    })
})

app.listen(3210, ()=>{
    console.log('Server aktif @port 3210!');
})