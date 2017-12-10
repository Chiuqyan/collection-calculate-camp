'use strict';

function choose_no_repeat_number(collection) {

    //在这里写入代码
    let res = [];
    res = collection.filter(item => {
        res.indexOf(item) === -1
    })
    return res;
}

module.exports = choose_no_repeat_number;