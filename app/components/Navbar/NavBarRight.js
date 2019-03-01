import { Candle } from '../../../core/core.js';
import { NavModal } from "./NavModal.js";

import UpdateAction from "../../actions/Navbar/updateAction.js";
import HomeAction from "../../actions/Navbar/homeAction.js";
import CollectionAction from "../../actions/Navbar/collectionAction.js";

export var NavBarRight = Candle.dom.createEl('section', {
    attrs: {
        "class": "navbar-section",
    },
    children: [
                        Candle.dom.createEl('a', {
                            attrs: {
                                "class" : "btn btn-link",
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
                                "class" : "btn btn-link",
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
                                "href": "#config",
                                "class": "btn btn-link",
                                "aria-label": "Open",
                                "style": "color: #222; display: inline;"
                            },
                            children: [
                                "Settings",
                            ]
                        }),
                        NavModal,
                        Candle.dom.createEl('button', {
                            attrs: {
                                "class" : "btn btn-sm",
                                "style": "color: #f5a623; border-color: #f5a623; margin-left: 16px"
                            },
                            children: [
                                "Update data"
                            ],
                            event: {
                                trigger: "click",
                                action: UpdateAction
                            }
                        }),


    ],
});