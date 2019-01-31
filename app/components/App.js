import { Candle } from '../../core/core.js';

import { Content } from './Content.js';
import { Nav } from './Nav.js';

export const App = Candle.create('nav', {
    attrs: {
        "id": 'appContainer',
        "class": "container",
        "candle": "container",
    },
    children: [
        Nav,
        Content
    ],
});
