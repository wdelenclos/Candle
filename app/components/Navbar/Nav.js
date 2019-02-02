import { Candle } from '../../../core/core.js';
import { NavBarLeft } from './NavBarLeft.js';
import { NavBarRight } from './NavBarRight.js';

export const Nav = Candle.create('nav', {
    attrs: {
        "class": "uk-navbar-container tm-navbar-container uk-active",
        "candle": "nav",
        "uk-sticky": true
    },
    children: [
        Candle.create('div', {
            attrs: {
                "class": "uk-container uk-container-expand",
            },
            children: [
                NavBarLeft,
                NavBarRight
            ]
        }),
    ],
});
