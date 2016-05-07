/**
 * Created by sscott on 5/7/16.
 */

var express = require('express');
var router = express.Router();
var debug = require('debug')('triCalc:start');

/* GET home page. */
router.get('/', function(req, res, next) {
    debug("Request handler 'start' was called");

    res.render('start', { title: 'TriCalc' });
});

module.exports = router;