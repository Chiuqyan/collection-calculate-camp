'use strict';

function average_uneven(collection) {

    //在这里写入代码
    let odd = collection.filter(item => item % 2 !== 0);
    return odd.reduce((a, b) => a + b) / odd.length;

}

module.exports = average_uneven;