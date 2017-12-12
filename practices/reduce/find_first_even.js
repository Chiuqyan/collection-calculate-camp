'use strict';

function find_first_even(collection) {
    //在这里写入代码
    let num = collection.filter(item => item % 2 === 0);
    return num[0];
}

module.exports = find_first_even;