var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/edit.html', function(req, res, next) {
    res.render('edit');
});

module.exports = router;
