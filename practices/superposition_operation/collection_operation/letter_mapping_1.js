'use strict';

function even_to_letter(collection) {

    //在这里写入代码
    let res = collection.filter(item => item % 2 === 0);
    return res.map(item => String.fromCharCode(item + 96));
}

module.exports = even_to_letter;