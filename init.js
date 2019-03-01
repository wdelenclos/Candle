import {Candle} from './core/core.js'
import {Home} from './app/components/Home.js';

/**
 *
 *   🕯️ Candle
 *
 **/

/**
 * Services injections
 */
Candle.services();

/**
 * Data fetch
 */
Candle.data;

Candle.router.navigate('/dashboard', 'Dashboard | Candle', Home);


