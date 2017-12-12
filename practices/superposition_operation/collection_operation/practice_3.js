'use strict';

function hybrid_operation_to_uneven(collection) {

    //在这里写入代码
    let odd = collection.filter(item => item % 2 !== 0);
    let res = odd.map(item => item * 3 + 5);
    return res.reduce((a, b) => a + b);
}

module.exports = hybrid_operation_to_uneven;