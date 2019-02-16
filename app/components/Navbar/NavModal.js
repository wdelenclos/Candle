import {Candle} from '../../../core/core.js';
import {config} from '../../../core/config/config.js'

export const NavModal = Candle.dom.createEl('div', {
    attrs: {
        "class": "modal",
        "id": "config",

    },
    children: [
        Candle.dom.createEl('div', {
            attrs: {
                "class": "modal-container",
            },
            children: [
                Candle.dom.createEl('div', {
                    attrs: {
                        "class": "modal-header",
                    },
                    children: [
                        Candle.dom.createEl('div', {
                                attrs: {
                                    "class": "modal-title h5"
                                },
                                children: [
                                    "Configuration"
                                ]
                            }
                        ),
                        Candle.dom.createEl('a', {
                                attrs: {
                                    "class": "btn btn-clear float-right",
                                    "href": "#close",
                                    "aria-label" : "Close"
                                }
                            }
                        )
                    ]
                }),
                Candle.dom.createEl('div', {
                    attrs: {
                        "class": "modal-body"
                    },
                    children: [
                        Candle.dom.createEl('div', {
                            attrs: {
                                "class": "form-group"
                            },
                            children: [
                               Candle.dom.createEl('label', {
                                   attrs: {
                                       "class": "form-label",
                                       "for": "settings"
                                   },
                                   children:[
                                      "Settings"
                                   ]
                               }),
                                Candle.dom.createEl('textarea', {
                                    attrs:{
                                        "class": "form-input",
                                        "id": "settings",
                                        "placeholder": "Set your configuration file here",
                                        "rows": "10"
                                    },
                                    children:[
                                        JSON.stringify(config, null, 4)
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ],
        }),
    ],
});
