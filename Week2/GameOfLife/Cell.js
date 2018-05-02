"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
var Cell = /** @class */ (function () {
    function Cell(row, column, state, friend) {
        if (state === void 0) { state = constants_1.CELL_STATE.DEAD; }
        if (friend === void 0) { friend = 0; }
        this.row = row;
        this.column = column;
        this.state = state;
        this.friend = friend;
    }
    Cell.prototype.setState = function (state) {
        this.state = state;
    };
    Cell.prototype.setFriend = function (friend) {
        this.friend = friend;
    };
    Cell.prototype.getState = function () {
        return this.state;
    };
    return Cell;
}());
exports.Cell = Cell;
