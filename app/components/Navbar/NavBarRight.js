import { Candle } from '../../../core/core.js';
import {NavModal} from "./NavModal.js";


export const NavBarRight = Candle.create('div', {
    attrs: {
        "class": "uk-navbar-right uk-light",
    },
    children: [
        Candle.create('ul', {
            attrs: {
                "class": "uk-navbar-nav",
            },
            children: [
                Candle.create('li', {
                    attrs: {
                        "class": "uk-active",
                    },
                    children: [
                        Candle.create('a', {
                            attrs: {
                                "uk-toggle": "",
                                "href": "#modal-example",
                                "class": "uk-active",
                                "style": "color: #222"
                            },
                            children: [
                                "Configuration",
                                Candle.create('span', {
                                    attrs: {
                                        "class": "ion-ios-arrow-down"
                                    }
                                }),
                            ],
                        }),
                        NavModal
                    ],
                }),
            ],
        }),
    ],
});
