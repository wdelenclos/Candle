import { Candle } from '../../../core/core.js';
import { Detail } from '../../components/Detail.js'

export default function(){
    Candle.router.navigate('/collection', "Collection | Candle", Detail, this);
    Candle.data.getDoc(document.origin.dataset.collection,function(doc){
        console.log(doc)
    });
    Candle.dom.replaceEl()
}