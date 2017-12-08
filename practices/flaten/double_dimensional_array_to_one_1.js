'use strict';
var flatten = [];

function double_to_one(collection) {

    //在这里写入代码
    flat(collection);
    return flatten;
}

function flat(collection) {
    collection.filter(item => {
        if (Array.isArray(item))
            flat(item);
        else
            flatten.push(item);
    });
}

module.exports = double_to_one;