'use strict';

function collect_all_even(collection) {
    //在这里写入代码
    let res = [];
    for (let number of collection) {
        if (number % 2 == 0) {
            res.push(number);

        }
    }
    return res;
}

module.exports = collect_all_even;