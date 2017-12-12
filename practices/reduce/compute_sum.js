'use strict';

function calculate_elements_sum(collection) {
    //在这里写入代码
    let res = collection.reduce((a, b) => a + b);
    return res;
}

module.exports = calculate_elements_sum;