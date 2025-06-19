/**
 *
 * @param {*[]|*} array
 * @param {number} [maxDepth]
 * @param {number} [currDepth]
 * @return {string}
 */
export function getTypeExpressionOfArray(array, maxDepth = 0, currDepth = 0){
    if(currDepth >= maxDepth)
        return '';

    if(!Array.isArray(array))
        return getTypeExpressionOfValue(array, maxDepth, currDepth+1);

    if(!array.length)
        return '*[]';

    const typesFound = new Set();
    for(let item of array){
        const typeExpr = getTypeExpressionOfValue(item, maxDepth, currDepth+1);
        typesFound.add(typeExpr);
    }

    return [...typesFound].join('|') + '[]';
}



/**
 *
 * @param {*} value
 * @param {number} [maxDepth]
 * @param {number} [currDepth]
 * @return {string}
 */
export function getTypeExpressionOfValue(value, maxDepth = 0, currDepth = 0){
    if(currDepth >= maxDepth)
        return '';

    if(value === undefined)
        return 'undefined';
    if(value === null)
        return 'null';

    if(Array.isArray(value))
        return enclose('(', getTypeExpressionOfArray(value, maxDepth, currDepth+1), ')', currDepth > 0 && currDepth < maxDepth);

    if(typeof value == 'object'){
        const constructorName = getConstructorName(value);
        if(constructorName)
            return constructorName;
        return 'object';
    }

    return typeof value;
}


/**
 *
 * @param {*} value
 * @return {string|undefined}
 */
export function getConstructorName(value){
    return value?.constructor?.name;
}



/**
 *
 * @param {string} charStart
 * @param {string} enclosedValue
 * @param {string} charEnd
 * @param {boolean} enclose
 * @return {string}
 */
function enclose(charStart, enclosedValue, charEnd, enclose){
    if(enclose)
        return charStart + enclosedValue + charEnd;
    return enclosedValue;
}
