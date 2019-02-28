// Candle JS -- Core object
// Author : Wladimir Delenclos
// version: 1.0


import cDom from './cDom/index.js';
import cFunctions from './cFunctions/index.js';
import cRouter from './cRouter/index.js';
import cData from './cData/index.js';

/**
 * Candle Core
 * @type {{dom: {createEl, updateEl, mountEl, replaceEl, renderEl, addEvent, removeEvent}, router: cRouter, services: *, functions: {debug, propertiesAccess, injectScript, typeCheck}, data: cData}}
 */
export var Candle = {
    dom: cDom,
    router: new cRouter,
    services: cFunctions.injectScript,
    functions: cFunctions,
    data: new cData()
};


