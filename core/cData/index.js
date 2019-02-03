import {Candle} from '../core.js'

import {config} from '../config/config.js'


export default class cData {
    constructor() {

    }
    getDocs(name, callback) {
        var docs;
        firebase.firestore().collection(name).get().then(snapshot => {
            snapshot.forEach(doc => {
                docs.push(doc.data());
            });
            callback(docs);
        }).catch(err => {
            console.log('Error getting course', err);
        });
    }
}

