// ---- Candle Admin dashboard

import { Candle } from '../../core/core.js';

import { Dashboard } from './Dashboard/Dashboard.js';
import { Nav } from './Navbar/Nav.js';
import { Notification } from './Notification.js';

export const Home = Candle.dom.createEl('div', {
    attrs: {
        "id": 'appContainer',
        "candle": "container"
    },
    children: [
        Nav,
        Dashboard,
        Notification
    ],
});
