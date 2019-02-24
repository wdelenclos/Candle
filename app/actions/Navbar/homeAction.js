import { Candle } from '../../../core/core.js';
import { Home } from '../../components/Home.js'

export default function(){
    Candle.router.navigate('/dashboard', "Content | Candle", Home)
}