'use strict';

function compute_average(collection) {
    //在这里写入代码
    let res = collection.reduce((pre, cur) => pre + cur);
    return res / collection.length;
}

module.exports = compute_average;