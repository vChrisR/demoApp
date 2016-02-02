var express = require('express');
var os = require('os');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'LoadGen Demo' });
});

module.exports = router;
