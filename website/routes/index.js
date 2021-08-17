var express = require('express');
var router = express.Router();
const data = require('../utils/data')

/* GET home page. */
router.get('/', function(req, res, next) {
  data.getAllSelectionServ((error, data)=>{
    if(error){
        return res.send({
            error
        })
    }
    const JSONBody = JSON.parse(data);
    return res.render('index', {
        title: "Bienvenidos a EDUTEC",
        JSONBody
    });

  })
});

module.exports = router;