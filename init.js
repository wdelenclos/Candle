import { Candle } from './core/core.js'
import { App } from './app/components/App.js';


document.Candle = Candle;

const router = new Candle.router();

Candle.services();

router.navigate('/dashboard' , 'Dashboard', App);

