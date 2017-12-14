'use strict';

function rank_by_two_large_one_small(collection) {
    let order = collection.sort((a, b) => a - b);
    for (let i = 0; i < collection.length - (collection.length % 3); i += 3) {
        [order[i], order[i + 1], order[i + 2]] = [order[i + 1], order[i + 2], order[i]];
    }
    return order;
}
module.exports = rank_by_two_large_one_small;