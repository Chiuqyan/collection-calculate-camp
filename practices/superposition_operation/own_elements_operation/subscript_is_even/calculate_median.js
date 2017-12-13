'use strict';
var calculate_median = function(collection) {
    let even = [];
    collection.reduce((pre, cur, item) => {
        if ((item + 1) % 2 === 0) {
            even.push(cur);
        }
    });
    let num = even.sort((itemA, itemB) => itemA - itemB);
    if (even.length % 2 === 0) {
        return Math.ceil((parseInt(num[even.length / 2]) + parseInt(num[even.length / 2 - 1])) / 2);
    } else {
        return parseInt(num[Math.floor(even.length / 2)]);
    }

};
module.exports = calculate_median;