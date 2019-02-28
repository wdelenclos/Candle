import {Candle} from '../../../core/core.js';


import {getConfig} from "../../../core/config/config.js";


var config = getConfig();

var content = [];

content.push(
    Candle.dom.createEl('div',
        {
            attrs: {
                'class': 'column col-12 col-xs-12',
                'style': 'cursor:pointer'
            },
            children: [
                Candle.dom.createEl('div', {
                    attrs: {
                        "class": "card",
                        "style": "-webkit-box-shadow: 10px 6px 44px -10px rgba(0,0,0,0.12); -moz-box-shadow: 10px 6px 44px -10px rgba(0,0,0,0.12); box-shadow: 10px 6px 44px -10px rgba(0,0,0,0.12);"
                    },
                    children: [
                        Candle.dom.createEl('div', {
                            attrs: {
                                "class": "card-header"
                            },
                            children: [
                                Candle.dom.createEl('div', {
                                    attrs: {
                                        "class": "card-title h6"
                                    },
                                    children: [
                                        config.base.authDomain,
                                        Candle.dom.createEl('span', {
                                            attrs: {
                                                "class": "label label-success float-right"
                                            },
                                            children: [
                                                "online"
                                            ]
                                        }),
                                    ]
                                }),
                                Candle.dom.createEl('div', {
                                    attrs: {
                                        "class": "card-subtitle text-gray"
                                    },
                                    children: [
                                        "API KEY : " + config.base.apiKey
                                    ]
                                })
                            ]
                        }),
                        Candle.dom.createEl('div', {
                            attrs: {
                                "class": "card-body"
                            },
                            children: [
                                Candle.dom.createEl('p', {
                                    children: [
                                        Candle.dom.createEl('i', {
                                            attrs:{
                                                "class" : "icon icon-resize-horiz",
                                                "style" : "margin-right: 8px"
                                            }
                                        }), config.base.projectId,
                                        Candle.dom.createEl('i', {
                                            attrs:{
                                                "class" : "icon icon-link",
                                                "style" : "margin-left: 16px; margin-right: 8px"
                                            }
                                        }),
                                        Candle.dom.createEl('a', {
                                            attrs:{
                                                "target" : "_blank",
                                                "href" : "https://console.firebase.google.com/u/0/project/"+config.base.projectId
                                            },
                                            children: [
                                                "console"
                                            ]
                                        }),
                                        Candle.dom.createEl('i', {
                                            attrs:{
                                                "class" : "icon icon-time",
                                                "style" : "margin-left: 16px; margin-right: 8px"
                                            }
                                        }),
                                        JSON.stringify(Date.now())
                                    ]
                                }),
                            ]
                        })
                    ]
                })
            ]
            , event: {
                trigger: "click",

            }
        }));

export const DashBoardDb = content;
