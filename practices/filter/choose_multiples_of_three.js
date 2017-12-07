'use strict';

function choose_multiples_of_three(collection) {

    //在这里写入代码
    let res = collection.filter(item => item % 3 === 0);
    return res;
}

module.exports = choose_multiples_of_three;