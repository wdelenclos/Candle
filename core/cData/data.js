// Gestion des collections

import {getConfig} from '../config/config.js'

export function getData(collection){
    return JSON.parse(window.localStorage.getItem("CandleData_"+collection));
}

export function getCollections(){
    let collections =  getConfig();
    return collections.data;
}

export  function getCollectionLength(collection){
    return JSON.stringify(JSON.parse(window.localStorage.getItem("CandleData_"+collection)).length);
}

