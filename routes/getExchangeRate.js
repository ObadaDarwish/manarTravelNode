var express = require('express');
var router = express.Router();
var con = require('../db');

router.get('/', function (req, res, next) {
    let sql = "SELECT `rate` FROM `exchange`"
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err);

        res.send(result);
    });
})
module.exports = router;