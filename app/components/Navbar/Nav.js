import { Candle } from '../../../core/core.js';
import { NavBarLeft } from './NavBarLeft.js';
import { NavBarRight } from './NavBarRight.js';

export const Nav = Candle.dom.createEl('div', {
    attrs: {
        "class": "uk-navbar-container tm-navbar-container uk-active",
        "candle": "nav",
        "uk-sticky": ""
    },
    children: [
        Candle.dom.createEl('div', {
            attrs: {
                "class": "uk-container uk-container-expand",
            },
            children: [
                Candle.dom.createEl('nav', {
                    attrs: {
                        "uk-navbar": "",
                    },
                    children: [
                        NavBarLeft,
                        NavBarRight
                    ]
                }),
            ]
        }),
    ],
});
