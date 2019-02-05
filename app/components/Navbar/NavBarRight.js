import { Candle } from '../../../core/core.js';
import { NavModal } from "./NavModal.js";

import CollectionAction from "../../actions/Navbar/collectionAction.js";
import HomeAction from "../../actions/Navbar/homeAction.js";

export const NavBarRight = Candle.dom.createEl('div', {
    attrs: {
        "class": "uk-navbar-right uk-light",
    },
    children: [
        Candle.dom.createEl('ul', {
            attrs: {
                "class": "uk-navbar-nav",
            },
            children: [
                Candle.dom.createEl('li', {
                    attrs: {
                        "class": "uk-active",
                    },
                    children: [
                        Candle.dom.createEl('a', {
                            attrs: {
                                "style": "color: #222; display: inline;"
                            },
                            children: [
                                "Dashboard",
                            ],
                            event: {
                                trigger: "click",
                                    action: HomeAction
                            }
                        }),
                        Candle.dom.createEl('a', {
                            attrs: {
                                "style": "color: #222; display: inline;"
                            },
                            children: [
                                "Collections",
                            ],
                            event: {
                                trigger: "click",
                                action: CollectionAction
                            }
                        }),
                        Candle.dom.createEl('a', {
                            attrs: {
                                "uk-toggle": "",
                                "href": "#modal-example",
                                "class": "uk-active",
                                "style": "color: #222; display: inline;"
                            },
                            children: [
                                "Settings",
                            ]
                        }),
                        NavModal
                    ],
                }),
            ],
        }),
    ],
});
