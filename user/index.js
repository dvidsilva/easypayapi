var express = require('express');
var router = express.Router();

var securenet = require('../common/securenet.js');

/*
 * GET userlist.
 */
router.get('/profile', function(req, res) {
    var db = req.db;
    var collection = db.get('user/ZHZpZHNpbHZh12');
    collection.insert({'name' : 'david'}, function () {

    });
    collection.find({},{},function(e, docs){
        res.json(docs);
    });
});

router.post('/token/get/all', function (req, res) {
  var db = req.db;
  var collection = db.get('user/ZHZpZHNpbHZh121/tokens');
  collection.find({},{},function(e, docs){
      res.json(docs);
  });
});

router.post('/token/new', function (req, res) {
  var db = req.db;
  var collection = db.get('user/ZHZpZHNpbHZh121/tokens');
  console.log(req.body);
  collection.insert(req.body);
  collection.find({},{},function(e, docs){
      res.json(docs);
  });
});



router.post('/feed/new', function (req, res) {
  var db = req.db;
  var collection = db.get('feed');
  collection.insert(req.body);
  collection.find({},{},function(e, docs){
      res.json(docs);
  });
});


router.post('/feed/get', function (req, res) {
  var db = req.db;
  var collection = db.get('feed');
  collection.find({},{},function(e, docs){
      res.json(docs);
  });
});





module.exports = router;

