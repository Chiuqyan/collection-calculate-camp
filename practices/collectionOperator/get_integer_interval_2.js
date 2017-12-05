'use strict';

function get_integer_interval_2(number_a, number_b) {
    //在这里写入代码
    let res = [];
    if (number_a < number_b) {
        for (let item = number_a; item <= number_b; item++)
            if (item % 2 == 0)
                res.push(item);

    } else if (number_a > number_b) {
        for (let item = number_a; item >= number_b; item--)
            if (item % 2 == 0)
                res.push(item);
    } else {
        if (number_a % 2 == 0)
            res.push(number_a);
    }
    return res;
}

module.exports = get_integer_interval_2;