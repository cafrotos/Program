const assert = require('chai').assert;
const app = require('../GameBoard.js');
const STATE = require('../constants');

describe('App', function(){
    it('Start test case: 3x3, gen 2', function(){
        var stringTest2 = ".o..o..o.";
        let GamePlay = new app.GameBoard(3, 3);
        GamePlay.getStateCell(0, 1, STATE.CELL_STATE.ALIVE);
        GamePlay.getStateCell(1, 1, STATE.CELL_STATE.ALIVE);
        GamePlay.getStateCell(2, 1, STATE.CELL_STATE.ALIVE);

        let string = GamePlay.run(4);
        assert.equal(string, stringTest2);
    })
    
    it('Start test case: 5x5, gen 3', function(){
        var stringTest2 = "..o...ooo.oo.oo.ooo...o..";
        let GamePlay = new app.GameBoard(5, 5);
        GamePlay.getStateCell(1, 2, STATE.CELL_STATE.ALIVE);
        GamePlay.getStateCell(2, 2, STATE.CELL_STATE.ALIVE);
        GamePlay.getStateCell(3, 2, STATE.CELL_STATE.ALIVE);
        GamePlay.getStateCell(2, 1, STATE.CELL_STATE.ALIVE);
        GamePlay.getStateCell(2, 3, STATE.CELL_STATE.ALIVE);

        let string = GamePlay.run(3);
        assert.equal(string, stringTest2);
    })

    
})


