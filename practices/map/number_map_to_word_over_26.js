'use strict';
var number_map_to_word_over_26 = function(collection) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let res = collection.map(item => {
        let letter;
        if (item < 27)
            letter = alphabet[item - 1];
        else
            letter = alphabet[parseInt(item / 26) - 1] + alphabet[item % 26 - 1];
        return letter;
    })
    return res;
};

module.exports = number_map_to_word_over_26;