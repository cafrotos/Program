"use strict";
exports.__esModule = true;
var GameBoard_1 = require("./GameBoard");
var constants_1 = require("./constants");
var GamePlay = new GameBoard_1.GameBoard(3, 3);

GamePlay.getStateCell(0, 1, constants_1.CELL_STATE.ALIVE);
GamePlay.getStateCell(1, 1, constants_1.CELL_STATE.ALIVE);
GamePlay.getStateCell(2, 1, constants_1.CELL_STATE.ALIVE);

console.log(GamePlay.run(3));

