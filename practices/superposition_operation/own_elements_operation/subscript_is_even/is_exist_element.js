'use strict';
var is_exist_element = function(collection, element) {
    let evenindex = collection.filter((item, index) => index % 2 === 0);
    if (evenindex.indexOf(element) === -1)
        return false;
    else
        return true;

};
module.exports = is_exist_element;