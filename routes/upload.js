var express = require('express');
var router = express.Router();
var debug = require('debug')('triCalc:upload');
var url = require('url');

router.post('/', function(req, res, next) {
    debug("Request handler 'upload' was called using POST");
    debug("Headers: " + JSON.stringify(req.headers));
    debug("Body: " + JSON.stringify(req.body));
    debug("Text: " + req.body.text);

    res.render('upload', { result: req.body.text, title: "Upload" });
});

module.exports = router;
