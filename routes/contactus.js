var express = require('express');
var router = express.Router();
var con = require('../db');


router.post('/', function (req, res, next) {
    let body = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile: req.body.mobile,
        message: req.body.message,
        email: req.body.email,
        created_at: req.body.created_at
    };
    let sql = " INSERT INTO `contactus`( `first_name`, `last_name`, `mobile`, `email`,`message`,`created_at`) VALUES ('" + body.first_name + "','" + body.last_name + "','" + body.mobile + "','" + body.email + "','" + body.message + "','" + body.created_at + "')";
    con.query(sql, function (err, result) {
        if (err)
            res.status(404).send(err);

        res.send('Message has been sent successfully');
    });
});

module.exports = router;
