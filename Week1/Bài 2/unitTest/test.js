var assert = require('chai').assert;
var appTest = require('../index.js');

describe("Index", function(){
    it("Start test case 10:", function(){
        let strTest1 = "open close close open close close close close open close ";
        assert.equal(appTest.SttDoor(10), strTest1);
    })
    
    it("Start test case 15:", function(){
        let strTest2 = "open close close open close close close close open close close close close close close ";
        console.log("messe111111111112", strTest2);
        console.log("messe111111111111", appTest.SttDoor(15));
        assert.equal(appTest.SttDoor(15), strTest2);
    })

    it("Start test case 25:", function(){
        let strTest3 = "open close close open close close close close open close close close close close close open close close close close close close close close open ";
        console.log("messe111111111112", strTest3);
        console.log("messe111111111111", appTest.SttDoor(25));
        assert.equal(appTest.SttDoor(25), strTest3);
    })
})

