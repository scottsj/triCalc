/**
 * Created by sscott on 5/7/16.
 */
// This is a sample test only for now
// TODO integrate testing framework
'use strict';

var greet = require('../src/greet');

describe('greet', function() {

    it('should greet the given name', function(){
        expect(greet('Joe')).toEqual('Hello Joe!');
    });

    it('should greet no-one special if no name given', function(){
        expect(greet()).toEqual('Hello world!');
    });
});