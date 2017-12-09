'use strict';
var number_map_to_word = function(collection) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let res = collection.map(item => alphabet[item - 1])
    return res;
};

module.exports = number_map_to_word;