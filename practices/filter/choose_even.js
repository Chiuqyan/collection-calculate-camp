'use strict';

function choose_even(collection) {

    //在这里写入代码l
    let res = [];
    res = collection.filter(item => item % 2 == 0)
    return res;

}

module.exports = choose_even;