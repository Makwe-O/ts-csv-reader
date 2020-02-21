"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./utils/parser");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.result = [];
    }
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.result = this.reader.data.map(function (row) {
            return [
                parser_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
