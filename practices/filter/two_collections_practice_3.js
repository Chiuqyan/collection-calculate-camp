'use strict';

function choose_divisible_integer(collection_a, collection_b) {

    //在这里写入代码
    let res = [];
    collection_a.filter(itema => {
        collection_b.filter(itemb => {
            if (itema % itemb === 0)
                res.push(itema);

        });
    });
    return res;

}

module.exports = choose_divisible_integer;