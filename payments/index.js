var express = require('express');
var router = express.Router();
var async = require('async');


router.post('/new', function (req, res) {
  var db = req.db;
  var collection = db.get('payments');
  console.log(req.body);
  collection.insert(req.body, {}, function (e, docs) {
    res.json(docs);
  });
  // collection.find({},{},function(e, docs){
  //     res.json(docs);
  // });
});

router.post('/get/:id', function (req, res) {
  var db = req.db;
  var collection = db.get('payments');
  collection.findOne({'_id' : req.params.id}, {}, function (e, docs) {
    res.json(docs);
  });
});

router.post('/get/all', function (req, res) {
  var db = req.db;
  var collection = db.get('payments');
  console.log('get all');
  collection.find({}, {}, function (e, docs) {
    console.log('got all');
    res.json(docs);
  });
});




router.post('/all', function (req, res) {
  var db = req.db;
  var collection = db.get('payments');
  collection.find({}, {}, function (e, docs) {
    res.json(docs);
  });
});

router.post('/edit/:id', function (req, res) {
  var db = req.db;
  var collection = db.get('companies');
  console.log(req.body);
  collection.update({'_id': req.params.id},{'$set' : {name: req.body.name, image: req.body.image}},function(e, docs){
    collection.find({'_id': req.params.id},{},function(e, docs){
      res.json(docs);
    });
  });
});


router.post('/product/new', function (req, res) {
  var db = req.db;
  var collection = db.get('products');
  console.log(req.body);
  collection.insert(req.body);
  collection.find({'company_id': req.body.company_id},{},function(e, docs){
    res.json(docs);
  });
});

router.post('/product/edit/:id', function (req, res) {
  var db = req.db;
  var collection = db.get('products');
  console.log(req.body);
  collection.update({'_id': req.params.id},{'$set' : {name: req.body.name, image: req.body.image}}, function(e, docs){
    collection.find({'_id': req.params.id},{},function(e, docs){
      res.json(docs);
    });
  });
});



router.post('/product/delete/:id', function (req, res) {
  var db = req.db;
  var collection = db.get('products');
  console.log(req.body);
  collection.insert(req.body);
  collection.remove({'_id': req.params.id},{},function(e, docs) {
    res.json({success: true});
  });
});

// 562c574563ae1c89582557dd
router.post('/get/:id', function (req, res) {
  var db = req.db;
  var companies = db.get('companies');
  var products = db.get('products');
  async.parallel({ 'company' : function (callback){
    console.log('parallel 1 ');
    companies.findOne({'_id' : req.params.id}, {}, function (e, docs) {
      callback(null, docs);
    });
  }, 'products': function (callback){
    console.log('parallel 2 ');
    products.find({'company_id' : req.params.id}, {}, function (e, docs) {
      console.log(docs);
      callback(null, docs);
    });
  }}, function (err, results) {
    res.json(results);
  });
});

router.post('/token/get/all', function (req, res) {
  var db = req.db;
  var collection = db.get('user/ZHZpZHNpbHZh121/tokens');
  collection.find({},{}, function (e, docs){
      res.json(docs);
  });
});



module.exports = router;

