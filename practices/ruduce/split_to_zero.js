'use strict';

function spilt_to_zero(number, interval) {
    //在这里写入代码
    let res = [];
    let answer = number;
    while (answer > 0) {
        res.push(parseFloat(answer.toFixed(1)));
        answer -= interval;
    }
    if (answer <= 0 && number % interval !== 0)
        res.push(parseFloat(answer.toFixed(1)));

    return res;
}

module.exports = spilt_to_zero;