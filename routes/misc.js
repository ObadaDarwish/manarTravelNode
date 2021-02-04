var express = require('express');
var router = express.Router();
var con = require('../db');


router.get('/getMisc1Sum/:code', function (req, res, nex) {
    let code = req.params.code;

    let sql = "SELECT `transport`+ `domFlights`+ `hajjCheques`+ `motawef`+ `fees`+`manar`+ `svExpenses` FROM `misc1` as `Total`  where `programType`='" + code + "'"
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err)
        res.send(result)
    })
})
router.get('/getMisc2Sum/:code', function (req, res, nex) {
    let code = req.params.code;

    let sql = "SELECT `fees`+ `intlFlights`+ `rep`+ `paxFree`+ `gifts`+ `manarVisa`+ `totalExp`  FROM `misc2` as `Total` where `programType`='" + code + "'"
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err)
        res.send(result)
    })
})


module.exports = router
