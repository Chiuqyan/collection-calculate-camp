'use strict';

function get_union(collection_a, collection_b) {
    //在这里写入代码let res = [];
    let res = collection_a;

    for (let itemB of collection_b)
        if (res.indexOf(itemB) === -1)
            res.push(itemB);
    return res;
}

module.exports = get_union;