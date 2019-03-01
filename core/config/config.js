// Candle.js configuration file

import debug from '../cFunctions/debug.js';
import {type} from '../cFunctions/typeCheck.js';

/**
 * Configuration object
 * @type {{mode: string, container: string, base: {apiKey: string, authDomain: string, databaseURL: string, projectId: string, storageBucket: string, messagingSenderId: string, timestampsInSnapshots: boolean}, services: string[], data: *[]}}
 */
export var config = {
    // MODES : string ( dev || prod )
    mode: "dev",
    container: "app",
    base: {
        apiKey: "AIzaSyAEeD5MoO9b37qNKFweoG4bYzUwJGUiOgs",
        authDomain: "fir-7c2a1.firebaseapp.com",
        databaseURL: "https://fir-7c2a1.firebaseio.com",
        projectId: "fir-7c2a1",
        storageBucket: "fir-7c2a1.appspot.com",
        messagingSenderId: "892629768075",
        timestampsInSnapshots: true
    },
    services: ["scripts"],
    data: [
        {
            collection: "arbres",
            displayName: "Arbres",
            desc: "Collection d'arbres"
        },
        {
            collection: "maison",
            displayName: "Maison",
            desc: "Collection de maisons"
        }
    ]
};


/**
 *  Get local stored configuration
 * @returns {any}
 */
export function getConfig() {
    if (type(window.localStorage.getItem('CandleConfig'), {'type' : 'string'}) && (window.localStorage.getItem('CandleConfig') === JSON.stringify(config))) {
        return JSON.parse(window.localStorage.getItem('CandleConfig'));
    }
    else {
        setConfig();
        return JSON.parse(window.localStorage.getItem('CandleConfig'));
    }
}


/**
 *  Set local stored configuration
 * @returns {boolean}
 */
export function setConfig() {
    window.localStorage.setItem('CandleConfig', JSON.stringify(config));
    debug('Configuration set in local storage', 'dev');
    return true;
}