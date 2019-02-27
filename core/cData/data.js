// Gestion des collections

import {getConfig} from '../config/config.js'

export function getData(collection) {
    if (window.localStorage.getItem("CandleData_" + collection) !== null) {
        return JSON.parse(window.localStorage.getItem("CandleData_" + collection));
    }
    else {
        return false;
    }

}

export function getCollections() {
    let collections = getConfig();
    return collections.data;
}

export function resetCollections() {
    let collections = getConfig();
    collections.data.forEach(function (el) {
        window.localStorage.removeItem("CandleData_" + el.collection);
    });
    return true
}

export function getCollectionLength(collection) {
    if (window.localStorage.getItem("CandleData_" + collection) !== null) {
        return JSON.stringify(JSON.parse(window.localStorage.getItem("CandleData_" + collection)).length);
    }
    else {
        return false;
    }
}

