'use strict';

function grouping_count(collection) {

    //在这里写入代码
    let res = [];
    collection.filter(item => {
        if (res.hasOwnProperty(item) === false)
            res[item] = 1;
        else
            res[item]++;
    });
    return res;
}

module.exports = grouping_count;