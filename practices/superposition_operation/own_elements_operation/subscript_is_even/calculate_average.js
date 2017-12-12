'use strict';
var calculate_average = function(collection) {

    let even = [];
    collection.reduce((pre, cur, item) => {
        if ((item + 1) % 2 === 0) {
            even.push(cur);
        }
    });
    return even.reduce((pre, cur) => pre + cur) / even.length;
};
module.exports = calculate_average;