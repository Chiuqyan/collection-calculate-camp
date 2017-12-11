'use strict';
var rank_asc = function(collection) {
    let res = collection.sort((itemA, itemB) => itemB - itemA);
    return res;
};

module.exports = rank_asc;