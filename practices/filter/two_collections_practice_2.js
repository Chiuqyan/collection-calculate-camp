'use strict';

function choose_no_common_elements(collection_a, collection_b) {

    //在这里写入代码
    let res = [];
    collection_a.filter(item => {
        if (collection_b.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}

module.exports = choose_no_common_elements;