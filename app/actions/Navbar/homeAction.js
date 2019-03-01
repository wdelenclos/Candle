import { Candle } from '../../../core/core.js';
import { Home } from '../../components/Home.js'

export default function(){
    Candle.router.navigate('/dashboard', "CollectionsContent | Candle", Home)
}