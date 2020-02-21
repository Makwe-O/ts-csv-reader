"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var enum_1 = require("./utils/enum");
var CsvReader_1 = require("./CsvReader");
var file = new CsvReader_1.CsvFileReader('football.csv');
var reader = new MatchReader_1.MatchReader(file);
reader.load();
var count = 0;
for (var _i = 0, _a = reader.result; _i < _a.length; _i++) {
    var data = _a[_i];
    if ((data[1] === 'Man United' && data[5] === enum_1.MatchResults.HomeWin) ||
        (data[2] === 'Man United' && data[5] === enum_1.MatchResults.AwayWin)) {
        count++;
    }
}
console.log('Manchester wins: ', count);
