import debug from './debug.js';
import propertiesAccess from './propertiesAccess.js';
import {inject} from './injectScripts.js';
import {typeCheck} from './typeCheck.js';
import {toCsv} from './export.js';

/**
 * 
 */
export default {
    debug: debug,
    propertiesAccess: propertiesAccess,
    injectScript: inject,
    typeCheck: typeCheck,
    export: toCsv
};