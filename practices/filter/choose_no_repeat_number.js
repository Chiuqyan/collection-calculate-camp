'use strict';

function choose_no_repeat_number(collection) {

    //在这里写入代码
    let res = [];
    res = collection.filter((item, index, res) => res.indexOf(item) === index);
    return res;
}


module.exports = choose_no_repeat_number;