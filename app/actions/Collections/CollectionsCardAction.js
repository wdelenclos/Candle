import { Candle } from '../../../core/core.js';
import { Collection } from '../../components/Collection.js'

export default function(){
    document.context = this.dataset.collection;
    Candle.router.navigate('/collection', "Collection | Candle", Collection)

}