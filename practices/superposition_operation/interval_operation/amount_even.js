'use strict';

function amount_even(collection) {

    //在这里写入代码
    let even = collection.filter(item => item % 2 === 0);
    return even.reduce((a, b) => a + b);

}

module.exports = amount_even;