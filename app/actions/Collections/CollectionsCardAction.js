import { Candle } from '../../../core/core.js';
import { Detail } from '../../components/Detail.js'

export default function(){
    document.context = this.dataset.collection;
    Candle.router.navigate('/collection', "Collection | Candle", Detail)

}