const assert = require('chai').assert;
const app = require('../app.js');

describe('App', function(){
    it('Start test case: 15', function(){
        var stringTest1 = "fizzbuzz 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz fizz 14 fizzbuzz ";
        assert.equal(app.func(15), stringTest1);
    })
    
    it('Start test case: 35', function(){
        var stringTest2 = "fizzbuzz 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz fizz 14 fizzbuzz 16 17 fizz 19 buzz fizz 22 fizz fizz buzz 26 fizz 28 29 fizzbuzz fizz fizz fizz fizz fizzbuzz ";
        assert.equal(app.func(35), stringTest2);
    })

    it('Start test case: 50', function(){
        var stringTest3 = "fizzbuzz 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz fizz 14 fizzbuzz 16 17 fizz 19 buzz fizz 22 fizz fizz buzz 26 fizz 28 29 fizzbuzz fizz fizz fizz fizz fizzbuzz fizz fizz fizz fizz buzz 41 fizz fizz 44 fizzbuzz 46 47 fizz 49 buzz ";
        assert.equal(app.func(50), stringTest3);
    })
})