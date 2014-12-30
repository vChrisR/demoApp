var express = require('express');
var os = require('os');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ITQ Demo', server: os.hostname() });
});

module.exports = router;
