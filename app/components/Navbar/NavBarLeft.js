import { Candle } from '../../../core/core.js';


export const NavBarLeft = Candle.create('div', {
    attrs: {
        "class": "uk-navbar-left",
    },
    children: [
        Candle.create('a', {
            attrs: {
                "id": "sidebar_toggle",
                "class": "uk-navbar-toggle",
                "uk-navbar-toggle-icon": true
            }
        }),
        Candle.create('a', {
            attrs: {
                "class": "uk-navbar-item uk-logo",
            },
            children: [
                Candle.create('img', {
                    attrs: {
                        "src": "https://www.smapps.app/storage/Logo.png",
                    }
                }),
            ]
        }),
    ],
});
