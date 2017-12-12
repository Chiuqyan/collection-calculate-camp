'use strict';

function median_to_letter(collection) {

    //在这里写入代码
    let num = collection.sort((itemA, itemB) => itemA - itemB);
    let middle;
    if (num.length % 2 === 0) {
        middle = Math.ceil((parseInt(num[collection.length / 2]) + parseInt(num[collection.length / 2 - 1])) / 2);
    } else {
        middle = parseInt(num[Math.floor(collection.length / 2)]);
    }
    let result = String.fromCharCode(middle / 26 + 96) + String.fromCharCode(middle % 26 + 96);
    return result;
}

module.exports = median_to_letter;