"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericCsvParser_1 = require("./GenericCsvParser");
var enum_1 = require("./utils/enum");
var reader = new GenericCsvParser_1.GenericCsvReader('football.csv');
reader.read();
console.log(reader.data[0][0]);
var count = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var data = _a[_i];
    if ((data[1] === 'Man United' && data[5] === enum_1.MatchResults.HomeWin) ||
        (data[2] === 'Man United' && data[5] === enum_1.MatchResults.AwayWin)) {
        count++;
    }
}
console.log('Manchester wins: ', count);
