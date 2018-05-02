"use strict";
exports.__esModule = true;
var Cell_1 = require("./Cell");
var constants_1 = require("./constants");
var GameBoard = /** @class */ (function () {
    function GameBoard(ROW, COL) {
        this.Cells = {};
        this.ROW = ROW;
        this.COL = COL;
        for (var row = 0; row < ROW; row++) {
            for (var column = 0; column < COL; column++) {
                this.Cells[row + "_" + column] = new Cell_1.Cell(row, column);
            }
        }
    }
    GameBoard.prototype.getStateCell = function (row, col, state) {
        this.Cells[row + "_" + col].state = state;
    };
    GameBoard.prototype.getNeighborhoodOfCell = function (cell) {
        return cell.friend;
    };
    GameBoard.prototype.calculateState = function (cell) {
        var neighbours = this.getNeighborhoodOfCell(cell);
        if (neighbours == constants_1.TWO_NEIGHBOURS) {
            return cell.state;
        }
        else if (neighbours == constants_1.THREE_NEIGHBOURS) {
            return constants_1.CELL_STATE.ALIVE;
        }
        else {
            return constants_1.CELL_STATE.DEAD;
        }
    };
    GameBoard.prototype.countFriendCell = function (cell) {
        var friend = 0;
        for (var x = cell.row - 1; x <= cell.row + 1; x++) {
            for (var y = cell.column - 1; y <= cell.column + 1; y++) {
                // console.log(x + " " + y);
                if (x >= 0 && y >= 0 && (x != cell.row || y != cell.column) && x < this.ROW && y < this.COL) {
                    if (this.Cells[x + "_" + y].state == constants_1.CELL_STATE.ALIVE)
                        friend++;
                }
            }
        }
        cell.setFriend(friend);
    };
    GameBoard.prototype.countFriend = function () {
        for (var index in this.Cells) {
            this.countFriendCell(this.Cells[index]);
        }
    };
    GameBoard.prototype.nextGenerationGrid = function () {
        var stateAfterNext = {};
        for (var index in this.Cells) {
            stateAfterNext[index] = this.calculateState(this.Cells[index]);
        }
        for (var index in this.Cells) {
            this.Cells[index].setState(stateAfterNext[index]);
        }
    };
    GameBoard.prototype.PrintGameboard = function () {
        let strTest = "";
        for (var row = 0; row < this.ROW; row++) {
            var stringResult = "";
            for (var col = 0; col < this.COL; col++) {
                if (this.Cells[row + "_" + col].getState() == constants_1.CELL_STATE.ALIVE)
                    stringResult += "o";
                else
                    stringResult += ".";
            }
            strTest += stringResult;
        }

        return strTest;

    };
    GameBoard.prototype.run = function (NumberOfGeneration) {
        for(let temp = 0; temp < NumberOfGeneration; temp++){
            this.countFriend();
            this.nextGenerationGrid();
        }
        let stringBoard = this.PrintGameboard();
        return stringBoard;
    };
    return GameBoard;
}());


exports.GameBoard = GameBoard;