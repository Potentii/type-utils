import {TypeUtils} from "../main.mjs";


describe('TypeOf', function () {

    it('It should allow correct type for string', () => {
        TypeUtils.typeOf.checkValue('string', 'abcd', 'string', true);
        TypeUtils.typeOf.checkValue('string-empty', '', 'string', true);
        TypeUtils.typeOf.checkValue('string-blank', '   ', 'string', true);
    });
    it('It should allow correct type for string array', () => {
        TypeUtils.typeOf.checkArray('string', ['abcd', '', '   '], 'string', true, true);
    });


    it('It should allow correct type for numbers', () => {
        TypeUtils.typeOf.checkValue('number', 45, 'number', true);
        TypeUtils.typeOf.checkValue('number-max', Number.MAX_VALUE, 'number', true);
        TypeUtils.typeOf.checkValue('number-min', Number.MIN_VALUE, 'number', true);
        TypeUtils.typeOf.checkValue('number-max-safe', Number.MAX_SAFE_INTEGER, 'number', true);
        TypeUtils.typeOf.checkValue('number-min-safe', Number.MIN_SAFE_INTEGER, 'number', true);
        TypeUtils.typeOf.checkValue('number-nan', Number.NaN, 'number', true);
        TypeUtils.typeOf.checkValue('number-pos-infinity', Number.POSITIVE_INFINITY, 'number', true);
        TypeUtils.typeOf.checkValue('number-neg-infinity', Number.POSITIVE_INFINITY, 'number', true);
    });
    it('It should allow correct type for number array', () => {
        TypeUtils.typeOf.checkArray('number', [45, Number.MAX_VALUE, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.NaN, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY], 'number', true, true);
    });


    it('It should allow correct type for booleans', () => {
        TypeUtils.typeOf.checkValue('boolean-true', true, 'boolean', true);
        TypeUtils.typeOf.checkValue('boolean-false', false, 'boolean', true);
    });
    it('It should allow correct type for booleans array', () => {
        TypeUtils.typeOf.checkArray('boolean', [true, false], 'boolean', true, true);
    });


    it('It should allow correct type for functions', () => {
        TypeUtils.typeOf.checkValue('func', function(){}, 'function', true);
        TypeUtils.typeOf.checkValue('func-async', async function(){}, 'function', true);
        TypeUtils.typeOf.checkValue('func-lambda', () => {}, 'function', true);
        TypeUtils.typeOf.checkValue('func-async-lambda', async () => {}, 'function', true);
        TypeUtils.typeOf.checkValue('func-generator', function *(){}, 'function', true);
        TypeUtils.typeOf.checkValue('func-async-generator', async function *(){}, 'function', true);
    });
    it('It should allow correct type for functions array', () => {
        TypeUtils.typeOf.checkArray('func', [function(){}, async function(){}, () => {}, async () => {}, function *(){}, async function *(){}], 'function', true, true);
    });


    it('It should allow correct type for objects', () => {
        TypeUtils.typeOf.checkValue('obj-literal', {}, 'object', true);
        TypeUtils.typeOf.checkValue('obj-array', [], 'object', true);
        TypeUtils.typeOf.checkValue('obj-instance', new Date(), 'object', true);
        TypeUtils.typeOf.checkValue('obj-instance-error', new Error(), 'object', true);
        TypeUtils.typeOf.checkValue('obj-null', null, 'object', false);
    });
    it('It should allow correct type for objects array', () => {
        TypeUtils.typeOf.checkArray('obj', [{}, [], new Date(), new Error()], 'object', true, true);
        TypeUtils.typeOf.checkArray('obj', [null], 'object', true, false);
    });


    it('It should allow correct type for undefined', () => {
        TypeUtils.typeOf.checkValue('undefined', undefined, 'undefined', false);
    });
    it('It should allow correct type for undefined array', () => {
        TypeUtils.typeOf.checkArray('undefined', [undefined], 'undefined', true, false);
    });

});

