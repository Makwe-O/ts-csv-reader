"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//Parent class to read and parse csv files
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        //Data attribute to hold Generic Type
        this.data = [];
        this.filename = filename;
    }
    //Typical method to read csv files
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) { return row.split(','); })
            .map(this.parseCsvData);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
