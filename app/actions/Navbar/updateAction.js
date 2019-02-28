import { Candle } from '../../../core/core.js';

import { resetCollections } from "../../../core/cData/data.js";

export default function() {

    resetCollections(function(){
        Candle.data.initDocs();
        Candle.router.navigate(document.context.path , document.context.title, document.context.node);
        document.getElementById('notificationBody').innerText = "Données mises à jour";
        document.getElementById('notification').classList.add('d-block');
        document.getElementById('notification').classList.remove('d-none');
    });

}