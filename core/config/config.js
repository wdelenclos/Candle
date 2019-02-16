// Candle.js configuration file

import debug from '../cFunctions/debug.js';
import {typeCheck} from '../cFunctions/typeCheck.js';

export var config = {
    // MODES : string ( dev || prod )
    mode: "dev",
    container: "app",
    base:{
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


/* Chaque service correspond à un fichier JS dans services
pour injecter des logiques disponibles dans les composants
disponible via
*/


export function getConfig(){
    if(typeCheck(window.localStorage.getItem('CandleConfig'), 'String') && (window.localStorage.getItem('CandleConfig') === JSON.stringify(config))){
            return JSON.parse(window.localStorage.getItem('CandleConfig'));
    }
    else{
        setConfig();
        return JSON.parse(window.localStorage.getItem('CandleConfig'));
    }
}

export function setConfig(){
    window.localStorage.setItem('CandleConfig', JSON.stringify(config));
    debug('Configuration set in local storage','dev');
    return true;
}