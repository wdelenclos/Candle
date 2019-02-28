import {Candle} from './core/core.js'
import {Home} from './app/components/Home.js';

import {getConfig} from './core/config/config.js'
import {typeCheck} from './core/cFunctions/typeCheck.js'

const config = getConfig();

if (typeCheck(config, 'Object') && config.mode == 'dev') {
    console.log(config);
}
;

Candle.services();
Candle.data;
Candle.router.navigate('/dashboard', 'Dashboard | Candleg', Home);


