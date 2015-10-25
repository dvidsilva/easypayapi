var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/', function(req, res) {
  console.log('hola');
  res.status(501).json({'response' : 'invalid request'});
});

module.exports = router;


