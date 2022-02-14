import TypeOf from "./type-of.mjs";
import InstanceOf from "./instance-of.mjs";

/**
 *
 * @type {TypeOf}
 */
const typeOf = new TypeOf();
/**
 *
 * @type {InstanceOf}
 */
const instanceOf = new InstanceOf();


export default class TypeUtils{

    /**
     *
     * @return {TypeOf}
     */
    static get typeOf(){
        return typeOf;
    }

    /**
     *
     * @return {InstanceOf}
     */
    static get instanceOf(){
        return instanceOf;
    }

}