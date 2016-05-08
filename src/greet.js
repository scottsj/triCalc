/**
 * Created by sscott on 5/7/16.
 */
'use strict';

var greet = function(name) {
    if (name === undefined) {
        name = 'world';
    }
    return 'Hello ' + name + '!';
}

module.exports = greet;