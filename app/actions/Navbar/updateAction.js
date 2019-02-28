import { Candle } from '../../../core/core.js';

import { resetCollections } from "../../../core/cData/data.js";
import {Home} from "../../components/Home.js";


export default function() {

    resetCollections(function(){
        Candle.data.initDocs();
        Candle.router.navigate('/dashboard', 'Dashboard | Candle', Home);
    });

}