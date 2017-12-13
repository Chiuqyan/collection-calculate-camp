'use strict';
var even_group_calculate_average = function(collection) {
    let evenindex = collection.filter((item, index) => (index + 1) % 2 === 0 && item % 2 === 0);
    let one = evenindex.filter(item => item.toString().length === 1);
    let ten = evenindex.filter(item => item.toString().length === 2);
    let hundred = evenindex.filter(item => item.toString().length === 3);
    let oneSum = one.reduce((a, b) => a + b, 0);
    let tenSum = ten.reduce((a, b) => a + b, 0);
    let hundredSum = hundred.reduce((a, b) => a + b, 0);
    if ((one && oneSum > 0) && (ten && tenSum > 0) && (hundred && hundredSum > 0)) {
        return [oneSum / one.length, tenSum / ten.length, hundredSum / hundred.length];
    }
    if ((hundredSum > 0) && (oneSum === 0) && (tenSum === 0)) {
        return [hundredSum / hundred.length];
    } else {
        return [0];
    }
};
module.exports = even_group_calculate_average;