var express = require('express');
var router = express.Router();

/* GET services page. */
router.get('/', function(req, res, next) {
  res.render('pages/servicios', { title: 'Servicios' });
});

module.exports = router;