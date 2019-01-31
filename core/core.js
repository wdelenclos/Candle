// Candle JS -- Custom Light DOM Render Framework
// Author : Wladimir Delenclos
// version 1.0

import  cRouter  from './cRouter/router.js';
import  cRender from './cDom/render.js';
import  cMount from './cDom/mount.js';
import  cCreate from './cDom/createElement.js';

import { inject } from './cFunctions/injectScripts.js';


export const Candle = {
    render : cRender,
    mount: cMount,
    create: cCreate,
    router: cRouter,
    services: inject
};





// TODO:
// Create script service injector for firebase
//
// cDom: update, attache event
// cRouter: persist & redirect route
// cservices: firebase
