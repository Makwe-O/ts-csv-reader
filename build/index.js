"use strict";
var Csv = /** @class */ (function () {
    function Csv(file) {
        this.file = file;
    }
    Csv.prototype.call = function () {
        console.log('Hi');
    };
    return Csv;
}());
