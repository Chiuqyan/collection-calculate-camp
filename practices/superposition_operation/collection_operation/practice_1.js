'use strict';

function hybrid_operation(collection) {

    //在这里写入代码
    let res = collection.map(item => item * 3 + 2);
    return res.reduce((a, b) => a + b);
}

module.exports = hybrid_operation;