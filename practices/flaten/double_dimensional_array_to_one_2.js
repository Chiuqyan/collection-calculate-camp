'use strict';
var flatten = [];

function flat(collection) {
    let res = [];
    collection.filter(item => {
        if (Array.isArray(item))
            flat(item);
        else
            flatten.push(item);
    });
}

function double_to_one(collection) {

    //在这里写入代码
    let res = [];
    flat(collection);
    flatten.filter(item => {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;

}

module.exports = double_to_one;