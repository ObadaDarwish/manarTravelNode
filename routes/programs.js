var express = require('express');
var router = express.Router();
var con = require('../db');


router.get('/getAllManarPrograms', function (req, res, next) {
    let code = req.params.code;

    let sql = "(SELECT `id`,`picture`,`programType`,`name`,`departureDate`,`created_at` FROM `manarhajj`) UNION(SELECT `id`,`picture`,`programType`,`name`,`departureDate`,`created_at` FROM `manarumrah`)  ORDER BY `created_at` DESC";
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send(err);
        }

        res.send(result);
    });
});
router.get('/getManarUmrahProgram/:code', function (req, res, next) {
    let code = req.params.code;

    let sql = "SELECT * FROM `manarumrah` WHERE `id`='" + code + "'"
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err);

        res.send(result);
    });
});

router.get('/getManarHajjProgram/:code', function (req, res, next) {

    let code = req.params.code;

    let sql = "SELECT * FROM `manarhajj` WHERE `id`='" + code + "'";
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err);
        res.send(result);
    });
});

router.post('/requestCustomProgram', function (req, res, next) {


    let sql = " INSERT INTO `customrequests`( `full_name`, `email`, `mobile`, `madinah_hotel`,`madinah_check_in`,`madinah_check_out`,`makkah_hotel`,`makkah_check_in`,`makkah_check_out`,`madinah_nights`,`makkah_nights`,`room_type`,`price`,`created_at`) VALUES ('" + req.body.full_name + "','" + req.body.email + "','" + req.body.mobile + "','" + req.body.madinah_hotel + "','" + req.body.madinah_check_in + "','" + req.body.madinah_check_out + "','" + req.body.makkah_hotel + "','" + req.body.makkah_check_in + "','" + req.body.makkah_check_out + "','" + req.body.madinah_nights + "','" + req.body.makkah_nights + "','" + req.body.room_type + "','" + req.body.price + "','" + req.body.created_at + "')";
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err);
        res.send(result);
    });
});
router.post('/requestManarProgram', function (req, res, next) {


    let sql = " INSERT INTO `manarrequests`( `name`, `email`, `mobile`,`program_id`,`program_type`,`created_at`) VALUES ('" + req.body.full_name + "','" + req.body.email + "','" + req.body.mobile + "','" + req.body.program_id + "','" + req.body.program_type + "','" + req.body.created_at + "')";
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err);
        res.send(result);
    });
});


module.exports = router;
