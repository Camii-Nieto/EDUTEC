var express = require('express');
var router = express.Router();

/* GET materiales page. */
router.get('/', function(req, res, next) {
  res.render('pages/materiales', {title: 'EDUTEC materiales electricos'});
});

module.exports = router;