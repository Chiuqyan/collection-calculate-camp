'use strict';
var single_element = function(collection) {
    let list = [];
    let res = [];
    let result = [];
    let evenindex = collection.filter((item, index) => (index + 1) % 2 === 0);
    evenindex.map((item, index) => {
        if (res.hasOwnProperty(item) === false) {
            res[item] = 1;
            list.push(item);
        } else
            res[item]++;
    });
    list.forEach(item => {
        if (res[item] === 1) {
            result.push(item);
        }
    })

    return result;
};
module.exports = single_element;