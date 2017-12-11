'use strict';
var rank_desc = function(collection) {
    let res = collection.sort((itemA, itemB) => itemA - itemB);
    return res;

};

module.exports = rank_desc;