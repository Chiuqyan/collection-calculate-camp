'use strict';
var map_to_four_multiples_add_one = function(collection) {
    let res = collection.map(item => (item * 4 + 1));
    return res;
};

module.exports = map_to_four_multiples_add_one;