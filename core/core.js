// Candle JS -- Custom Light DOM Render Framework
// Author : Wladimir Delenclos
// version 1.0

import  cRouter  from './cRouter/router.js';
import  cRender from './cDom/render.js';
import  cMount from './cDom/mount.js';
import  cCreate from './cDom/createElement.js';

import cFunctions from './cFunctions/index.js';


export var Candle = {

    render : cRender,
    mount: cMount,
    create: cCreate,
    router: cRouter,
    services: cFunctions.injectScript,
    functions: cFunctions
};

