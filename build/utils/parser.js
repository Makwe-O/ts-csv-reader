"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (data) {
    var splitDate = data.split('/').map(function (val) { return parseInt(val); });
    return new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
};
