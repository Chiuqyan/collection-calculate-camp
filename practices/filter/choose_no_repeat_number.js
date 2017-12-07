'use strict';

function choose_no_repeat_number(collection) {

    //在这里写入代码
    let res = [];
    collection.filter(item => {
        if (res.indexOf(item) === -1)
            res.push(item);
    })
    return res;
}

module.exports = choose_no_repeat_number;