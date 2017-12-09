'use strict';

function map_to_even(collection) {
    let res = collection.map(item => item * 2);
    return res;
}
module.exports = map_to_even;