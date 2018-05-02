"use strict";
exports.__esModule = true;
var Randomize = /** @class */ (function () {
    function Randomize() {
    }
    Randomize.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return Randomize;
}());
exports.Randomize = Randomize;
