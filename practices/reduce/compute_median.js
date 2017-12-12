'use strict';

function compute_median(collection) {
    //在这里写入代码
    let num = collection.sort((a, b) => a - b);
    if (num.length % 2 === 0) {
        return (parseInt(num[num.length / 2]) + parseInt(num[num.length / 2 - 1])) / 2;
    } else {
        return parseInt(num[Math.floor(num.length / 2)]);
    }
}

module.exports = compute_median;