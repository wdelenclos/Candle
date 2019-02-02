// ---- Firebase Admin dashboard

import { Candle } from '../../core/core.js';

import { Content } from './dashboard/Content.js';
import { Nav } from './Navbar/Nav.js';

export const App = Candle.create('div', {
    attrs: {
        "id": 'appContainer',

        "candle": "container",
    },
    children: [
        Nav,
        Content
    ],
});
