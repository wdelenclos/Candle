// ---- Firebase Admin dashboard

import { Candle } from '../../core/core.js';
import { Content } from './Collection/Content.js';
console.log(Content);

export const Collection = Candle.dom.createEl('div', {
    attrs: {
        "id": 'appContainer'
    },
    children:
        Content
    ,
});
