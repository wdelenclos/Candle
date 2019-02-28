// ---- Candle Detail collection

import {Candle} from '../../core/core.js';
import {Collection} from './Collection/Collection.js';
import {Nav} from './Navbar/Nav.js';
import {Notification} from './Notification.js';

export const Detail = Candle.dom.createEl('div', {
    attrs: {
        "id": 'appContainer'
    },
    children:
        [
            Nav,
            Collection,
            Notification
        ]
    ,
});
