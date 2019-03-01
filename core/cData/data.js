// Gestion des collections

import {getConfig} from '../config/config.js'
import {Candle} from "../core.js";

/**
 *
 * @param collection
 * @returns {*}
 */
export function getData(collection) {
    if (Candle.functions.type(collection,{'type':'string'})){
        if (window.localStorage.getItem("CandleData_" + collection) !== null) {
            return JSON.parse(window.localStorage.getItem("CandleData_" + collection));
        } else {
            return false;
        }
    }
    else{
        Candle.functions.debug('Wrong collection type','warn')
    }

}

/**
 *
 * @returns {*}
 */
export function getCollections() {
    let collections = getConfig();
    return collections.data;
}

/**
 *
 * @param callback
 * @returns {boolean}
 */
export function resetCollections(callback) {
    if(Candle.functions.type(callback,{'type':'function'})) {
        let collections = getConfig();
        collections.data.forEach(function (el) {
            window.localStorage.removeItem("CandleData_" + el.collection);
            callback();
        });
        return true
    }
    else{
        Candle.functions.debug('Wrong callback type','warn')
    }
}

/**
 *
 * @param collection
 * @returns {*}
 */
export function getCollectionLength(collection) {
    if (Candle.functions.type(collection,{'type':'string'})) {
        if (window.localStorage.getItem("CandleData_" + collection) !== null) {
            return JSON.stringify(JSON.parse(window.localStorage.getItem("CandleData_" + collection)).length);
        } else {
            return false;
        }
    }
    else{
        Candle.functions.debug('Wrong collection type','warn')
    }
}

