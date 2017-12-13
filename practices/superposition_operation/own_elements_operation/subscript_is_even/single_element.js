'use strict';
var single_element = function(collection) {
    let evenindex = collection.filter((item, index) => (index + 1) % 2 === 0);
    let res = evenindex.filter((item, index, res) => res.indexOf(item) === index);
    return res;
};
module.exports = single_element;