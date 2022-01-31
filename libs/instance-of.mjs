export default class InstanceOf{

    /**
     * Checks a value for its instance type
     * It uses the native 'instanceof'.
     * @param {string} name
     * @param {*} value
     * @param {Function|Class|*} classType
     * @param {boolean} [required=false] Wether it should throw if the value is undefined/null
     * @throws {TypeError} If the type conditions do not satisfy
     */
    static checkValue(name, value, classType, required = false){
        if(!required && (value === null || value === undefined))
            return;
        if(!(value instanceof classType))
            throw new TypeError(`Invalid instance for "${name}": Expected "${classType}", but got "${getConstructorName(value)}"`);
    }

    /**
     * Checks an array for its items' instance types
     * It uses the native 'instanceof'.
     * @param {string} name
     * @param {*[]} value
     * @param {Function|Class|*} classType
     * @param {boolean} [required=false] Wether it should throw if the value is undefined/null
     * @param {boolean} [requiredItems=true] Wether it should throw if one or more array entries are undefined/null
     * @throws {TypeError} If the type conditions do not satisfy
     */
    static checkArray(name, value, classType, required = false, requiredItems = true){
        if(!required && (value === null || value === undefined))
            return;
        if(!Array.isArray(value) || !value.every(v => v instanceof classType) || (requiredItems && value.some(v => v===null || v===undefined)))
            throw new TypeError(`Invalid instance for "${name}": Expected "${classType}[]", but got "${!Array.isArray(value) ? (value===null||value===undefined ? (value===null?'null':'undefined') : (typeof value == 'object' ? (getConstructorName(value)) : (typeof value))) : ([...new Set(value.filter(v => v instanceof classType || (requiredItems && (v ===null || v===undefined))).map(v => v===null ? 'null' : getConstructorName(v)))].join('|') + '[]')}"`);
    }

}


function getConstructorName(value){
    return value?.constructor?.name;
}
