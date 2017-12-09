'use strict';
var map_to_three_multiples = function(collections) {
    let res = collections.map(item => item * 3);
    return res;
};

module.exports = map_to_three_multiples;