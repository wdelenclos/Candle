// ---- Candle Admin dashboard

import {Candle} from '../../core/core.js';


import {CollectionsContent} from './Collections/CollectionsContent.js';
import {Notification} from './Notification.js';


export const Collections = Candle.dom.createEl('div', {
    attrs: {
        "id": 'appContainer',
    },
    children: [
        CollectionsContent,
        Notification
    ],
});
