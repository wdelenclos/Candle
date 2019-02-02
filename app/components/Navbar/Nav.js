import { Candle } from '../../../core/core.js';
import { NavBarLeft } from './NavBarLeft.js';
import { NavBarRight } from './NavBarRight.js';

export const Nav = Candle.create('div', {
    attrs: {
        "class": "uk-navbar-container tm-navbar-container uk-active",
        "candle": "nav",
        "uk-sticky": ""
    },
    children: [
        Candle.create('div', {
            attrs: {
                "class": "uk-container uk-container-expand",
            },
            children: [
                Candle.create('nav', {
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
