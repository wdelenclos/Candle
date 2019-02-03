import { Candle } from '../../../core/core.js';


export const NavBarLeft = Candle.dom.createEl('div', {
    attrs: {
        "class": "uk-navbar-left",
    },
    children: [
        Candle.dom.createEl('a', {
            attrs: {
                "id": "sidebar_toggle",
                "class": "uk-navbar-toggle",
                "uk-navbar-toggle-icon": true
            }
        }),
        Candle.dom.createEl('a', {
            attrs: {
                "class": "uk-navbar-item uk-logo",
            },
            children: [
                Candle.dom.createEl('img', {
                    attrs: {
                        "src": "/assets/img/logo.svg",
                        "width" : "105px"
                    }
                }),
            ]
        }),
    ],
});
