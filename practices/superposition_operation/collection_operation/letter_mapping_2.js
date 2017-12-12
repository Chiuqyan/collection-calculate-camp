'use strict';

function average_to_letter(collection) {

    //在这里写入代码
    let num = (collection.reduce((a, b) => a + b)) / collection.length;
    return String.fromCharCode(Math.ceil(num) + 96);
}

module.exports = average_to_letter;