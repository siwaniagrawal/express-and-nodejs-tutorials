var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("yes");
  res.send('you are so cool');
});

module.exports = router;
