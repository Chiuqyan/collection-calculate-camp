'use strict';

function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ]; //listt of letter
    let res = [];
    if (number_a < number_b) {
        for (let item = number_a; item <= number_b; item++)
            if (item <= 26)
                res.push(alphabet[item - 1]);
            else
                res.push(alphabet[parseInt((item - 1) / 26) - 1] + alphabet[(item - 1) % 26]);
    } else if (number_a > number_b) {
        for (let item = number_a; item >= number_b; item--)
            if (item <= 26)
                res.push(alphabet[item - 1]);
            else
                res.push(alphabet[parseInt((item - 1) / 26) - 1] + alphabet[(item - 1) % 26]);
    } else {
        if (number_a <= 26)
            res.push(alphabet[number_a - 1]);
        else
            res.push(alphabet[parseInt((number_a - 1) / 26) - 1] + alphabet[(number_a - 1) % 26]);
    }
    return res;
}

module.exports = get_letter_interval_2;