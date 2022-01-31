import TypeOf from "../libs/type-of.mjs";

describe('TypeOf', function () {

    it('It should allow correct type for string', () => {
        TypeOf.checkValue('string', 'abcd', 'string', true);
        TypeOf.checkValue('string-empty', '', 'string', true);
        TypeOf.checkValue('string-blank', '   ', 'string', true);
    });
    it('It should allow correct type for string array', () => {
        TypeOf.checkArray('string', ['abcd', '', '   '], 'string', true, true);
    });


    it('It should allow correct type for numbers', () => {
        TypeOf.checkValue('number', 45, 'number', true);
        TypeOf.checkValue('number-max', Number.MAX_VALUE, 'number', true);
        TypeOf.checkValue('number-min', Number.MIN_VALUE, 'number', true);
        TypeOf.checkValue('number-max-safe', Number.MAX_SAFE_INTEGER, 'number', true);
        TypeOf.checkValue('number-min-safe', Number.MIN_SAFE_INTEGER, 'number', true);
        TypeOf.checkValue('number-nan', Number.NaN, 'number', true);
        TypeOf.checkValue('number-pos-infinity', Number.POSITIVE_INFINITY, 'number', true);
        TypeOf.checkValue('number-neg-infinity', Number.POSITIVE_INFINITY, 'number', true);
    });
    it('It should allow correct type for number array', () => {
        TypeOf.checkArray('number', [45, Number.MAX_VALUE, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.NaN, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY], 'number', true, true);
    });


    it('It should allow correct type for booleans', () => {
        TypeOf.checkValue('boolean-true', true, 'boolean', true);
        TypeOf.checkValue('boolean-false', false, 'boolean', true);
    });
    it('It should allow correct type for booleans array', () => {
        TypeOf.checkArray('boolean', [true, false], 'boolean', true, true);
    });


    it('It should allow correct type for functions', () => {
        TypeOf.checkValue('func', function(){}, 'function', true);
        TypeOf.checkValue('func-async', async function(){}, 'function', true);
        TypeOf.checkValue('func-lambda', () => {}, 'function', true);
        TypeOf.checkValue('func-async-lambda', async () => {}, 'function', true);
        TypeOf.checkValue('func-generator', function *(){}, 'function', true);
        TypeOf.checkValue('func-async-generator', async function *(){}, 'function', true);
    });
    it('It should allow correct type for functions array', () => {
        TypeOf.checkArray('func', [function(){}, async function(){}, () => {}, async () => {}, function *(){}, async function *(){}], 'function', true, true);
    });


    it('It should allow correct type for objects', () => {
        TypeOf.checkValue('obj-literal', {}, 'object', true);
        TypeOf.checkValue('obj-array', [], 'object', true);
        TypeOf.checkValue('obj-instance', new Date(), 'object', true);
        TypeOf.checkValue('obj-instance-error', new Error(), 'object', true);
        TypeOf.checkValue('obj-null', null, 'object', false);
    });
    it('It should allow correct type for objects array', () => {
        TypeOf.checkArray('obj', [{}, [], new Date(), new Error()], 'object', true, true);
        TypeOf.checkArray('obj', [null], 'object', true, false);
    });


    it('It should allow correct type for undefined', () => {
        TypeOf.checkValue('undefined', undefined, 'undefined', false);
    });
    it('It should allow correct type for undefined array', () => {
        TypeOf.checkArray('undefined', [undefined], 'undefined', true, false);
    });

});

