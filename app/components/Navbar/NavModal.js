import {Candle} from '../../../core/core.js';
import {config} from '../../../core/config/config.js'

export var NavModal = Candle.dom.createEl('div', {
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
                                }),
                                Candle.dom.createEl('div', {
                                    attrs:{
"class" : "divider text-center",
                                        "data-content" : "Need to edit ?"
                                    },
                                }),
                                Candle.dom.createEl('p', {
                                    attrs:{
                                        "class" : "text-justify"
                                    },
                                    children:[
                                        "Edit the configuration in : ",
                                        Candle.dom.createEl('code', {
                                            attrs:{
                                                "class" : "text-justify"
                                            },
                                            children:[
                                                "/core/config/config.js"
                                            ]
                                        })
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
