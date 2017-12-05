'use strict';

function get_letter_interval(number_a, number_b) {
    //在这里写入代码
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ]; //list of letter
    let res = [];
    if (number_a < number_b) { //increase
        for (let num = number_a; num <= number_b; num++)
            res.push(alphabet[num - 1]);
    } else if (number_a > number_b) { //decrease
        for (let num = number_a; num >= number_b; num--)
            res.push(alphabet[num - 1]);
    } else res.push(alphabet[number_a - 1]);

    return res;
}

module.exports = get_letter_interval;