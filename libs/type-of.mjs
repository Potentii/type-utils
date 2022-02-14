/**
 * @typedef {'string' | 'number' | 'boolean' | 'function' | 'object' | 'undefined'} ETypeOf
 */

export default class TypeOf{

    /**
     * Checks a value for its primitive type
     * It uses the native 'typeof'.
     * @param {string} name
     * @param {*} value
     * @param {ETypeOf} type
     * @param {boolean} [required=false] Wether it should throw if the value is undefined/null
     * @throws {TypeError} If the type conditions do not satisfy
     */
    checkValue(name, value, type, required = false){
        if(!required && (value === null || value === undefined))
            return;
        if(value === null || value === undefined || typeof value != type)
            throw new TypeError(`Invalid type for "${name}": Expected "${type}", but got "${typeof value}"`);
    }

    /**
     * Checks an array for its items' primitive types
     * It uses the native 'typeof'.
     * @param {string} name
     * @param {*[]} value
     * @param {ETypeOf} type
     * @param {boolean} [required=false] Wether it should throw if the value is undefined/null
     * @param {boolean} [requiredItems=true] Wether it should throw if one or more array entries are undefined/null
     * @throws {TypeError} If the type conditions do not satisfy
     */
    checkArray(name, value, type, required = false, requiredItems = true){
        if(!required && (value === null || value === undefined))
            return;
        if(!Array.isArray(value) || !value.every(v => typeof v == type) || (requiredItems && value.some(v => v===null || v===undefined)))
            throw new TypeError(`Invalid type for "${name}": Expected "${type}[]", but got "${!Array.isArray(value) ? (value===null||value===undefined ? (value===null?'null':'undefined') : (typeof value == 'object' ? (getConstructorName(value)) : (typeof value))) : ([...new Set(value.filter(v => typeof v != type || (requiredItems && (v ===null || v===undefined))).map(v => v===null ? 'null' : typeof v))].join('|') + '[]')}"`);
    }

}

function getConstructorName(value){
    return value?.constructor?.name;
}
