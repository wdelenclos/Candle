import {Candle} from '../core.js'
/**
 * Primitive type check
 * Conf example: {'type' : 'string'}
 * @param data
 * @param type
 * @returns {*}
 */
function primitiveTypeCheck(data, type) {
    switch (typeof data) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof data;
        case "object":
            switch (type) {
                case "null":
                    return data === null;
                case "array":
                    return Array.isArray(data);
                default:
                    return type === typeof data && data !== null && !Array.isArray(data);
            }
        default:
            Candle.functions.debug(conf[key] + " is not a valid type", 'warn');
            return false;
    }
}

/**
 *
 * @param data
 * @param conf
 * @returns {boolean}
 */
function routerTypeCheck(data, conf) {
    for (var key of Object.keys(conf)) {
        switch (key) {
            case 'type':
                if (!primitiveTypeCheck(data, conf[key])){
                    return false;
                }
                break;
            case 'value':
                if (JSON.stringify(data) !== JSON.stringify(conf[key])) return false;
                break;
            case 'enum':
                var valid = false;
                for (var value of conf[key]) {
                    valid = routerTypeCheck(data, {value});
                    if (valid) break;
                }
                if (!valid) return false;
        }
    }
    return true;
}


/**
 *  Type checker function
 * @param data
 * @param conf
 * @returns {boolean}
 */
export function type(data, conf) {
    for (var key of Object.keys(conf)) {
        switch (key) {
            case 'type':
            case 'value':
            case 'enum':
                var newConf = {};
                newConf[key] = conf[key];
                if (!routerTypeCheck(data, newConf)) return false;
                break;
            case 'properties':
                for (let prop of Object.keys(conf[key])) {
                    if (data[prop] === undefined) return false;
                    if (!typeCheck(data[prop], conf[key][prop])) return false;
                }
                break;
            default:
                Candle.functions.debug(key + " is not a valid attributes", 'warn');
                return false;
        }
    }
    return true;
}

