var express = require('express');
var router = express.Router();

/* GET matriculado page. */
router.get('/', function(req, res, next) {
  res.render('pages/matriculado', {title: 'EDUTEC Electricita matriculado'});
});

module.exports = router;