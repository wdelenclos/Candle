import { Candle } from '../../../core/core.js';

import { resetCollections } from "../../../core/cData/data.js";


export default function() {
    resetCollections();
    Candle.data;
    document.location.replace('');
}