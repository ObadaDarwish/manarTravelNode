var express = require('express');
var router = express.Router();
var con = require('../db');


router.get('/getMakkahHotels/:code', function (req, res, next) {
    let code = req.params.code;

    let sql = "SELECT   `id`,`name`, `rating`, `location`, `currency`, `single`, `double`, `triple`, `quad`, `picture` FROM `" + code + "` WHERE `location`='makkah'"; //replace emp_info with your table name
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err);

        res.send(result);
    });
});

router.get('/getMadinahHotels/:code', function (req, res, next) {

    let code = req.params.code;

    let sql = "SELECT   `id`,`name`, `rating`, `location`, `currency`, `single`, `double`, `triple`, `quad`,  `picture` FROM `" + code + "` WHERE `location`='madinah'"
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err);
        res.send(result);
    });
});
module.exports = router;
