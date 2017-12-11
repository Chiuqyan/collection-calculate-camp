'use strict';

function compare_collections(collection_a, collection_b) {
    //在这里写入代码
    if (collection_a.length !== collection_b.length) {
        return false;
    }
    return collection_a.every((item, index) => item === collection_b[index]);
}

module.exports = compare_collections;