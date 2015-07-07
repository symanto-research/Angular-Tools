// ----------------------------------------------------------------------------------------------------
// Array helper
// ----------------------------------------------------------------------------------------------------

/**
 * Returns an element of a list that has the given string as .Name property
 * @param list
 * @param elementName
 * @returns found element or -1
 */
function getElementByName(list, elementName){
    for (var i = 0; i < list.length; i++){
        if (list[i].Name == elementName || list[i].name == elementName) {
            return list[i];
        }
    }
    return -1;
}

// ----------------------------------------------------------------------------------------------------
// JavaScript tools
// ----------------------------------------------------------------------------------------------------

/**
 * Checks if a JavaScript object is empty or undefined
 * @param object to check
 * @returns {boolean}
 */
function isEmpty(obj) {
    if (obj == undefined)
        return true;

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}