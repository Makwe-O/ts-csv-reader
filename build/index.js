"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var content = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map(function (row) { return row.split(','); });
var count = 0;
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
    var match = content_1[_i];
    if ((match[1] === 'Man United' && match[5] === MatchResults.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResults.AwayWin)) {
        count++;
    }
}
console.log('Manchester wins: ', count);
