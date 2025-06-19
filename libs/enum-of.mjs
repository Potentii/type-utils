export default class EnumOf{

    /**
     * Checks if an enum value is valid
     * @param {string} name
     * @param {*} value
     * @param {*[]} enumEntries
     * @param {boolean} [required=false] Wether it should throw if the value is undefined/null
     * @throws {TypeError} If the value is not valid
     */
    checkValue(name, value, enumEntries, required = false){
        if(!required && (value === null || value === undefined))
            return;
        if(!enumEntries.some(entry => entry == value))
            throw new TypeError(`Invalid enum value for "${name}": Expected one of [${enumEntries.join(',')}], but got "${value}"`);
    }

    /**
     * Checks if an enum array is valid
     * @param {string} name
     * @param {*[]} value
     * @param {*[]} enumEntries
     * @param {boolean} [required=false] Wether it should throw if the value is undefined/null
     * @param {boolean} [requiredItems=true] Wether it should throw if one or more array entries are undefined/null
     * @throws {TypeError} If one or more of the array items are not valid
     */
    checkArray(name, value, enumEntries, required = false, requiredItems = true){
        if(!required && (value === null || value === undefined))
            return;
        if(!Array.isArray(value))
            throw new TypeError(`Invalid value for "${name}": Expected an array of enums, but got "${value===null||value===undefined ? (value===null?'null':'undefined') : 'TODO'}"`); // TODO

        // TODO
        // const
        // if()
        //
        //
        // if( || !value.every(v => enumEntries.some(entry => entry == v)) || (requiredItems && value.some(v => v===null || v===undefined)))
        //     throw new TypeError(`Invalid enum value for "${name}" item: Expected one of "${classType}[]", but got "${!Array.isArray(value) ? (value===null||value===undefined ? (value===null?'null':'undefined') : (typeof value == 'object' ? (getConstructorName(value)) : (typeof value))) : ([...new Set(value.filter(v => v instanceof classType || (requiredItems && (v ===null || v===undefined))).map(v => v===null ? 'null' : getConstructorName(v)))].join('|') + '[]')}"`);
    }

}


function getConstructorName(value){
    return value?.constructor?.name;
}
