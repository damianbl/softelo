var express = require('express');
var router = express.Router();
var mailService = require('../services/mailService');

/* GET home page. */
router.get('/', function (req, res) {
    res.sendfile('../public/index.html');
});

router.post('/sendMessage', function (req, res) {
    if (req.body) {
        mailService.sendEmail(req.body.email, req.body.message, req.body.name, req.body.phone);
        res.send(200);
    } else {
        console.log('request body empty');
        res.send(500);
    }
});

module.exports = router;
