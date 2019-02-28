import {Candle} from '../../../core/core.js';

import {getCollectionLength, getCollections} from "../../../core/cData/data.js";
import CollectionsCardAction from "../../actions/Collections/CollectionsCardAction.js";


var data = getCollections();


var content = [];

data.forEach(function (el) {
    console.log(el);
    content.push(
        Candle.dom.createEl('div',
            {
                attrs: {
                    'class': 'column col-4 col-xs-12',
                    'style': 'cursor:pointer',
                    'data-collection':el.collection
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
                                            "class": "card-title h5"
                                        },
                                        children: [
                                            el.displayName,
                                            Candle.dom.createEl('span', {
                                                attrs: {
                                                    "class": "label label-warning float-right"
                                                },
                                                children: [
                                                    getCollectionLength(el.collection)
                                                ]
                                            }),
                                        ]
                                    }),
                                    Candle.dom.createEl('div', {
                                        attrs: {
                                            "class": "card-subtitle text-gray"
                                        },
                                        children: [
                                            el.collection
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
                                            el.desc
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
                , event: {
                    trigger: "click",
                    action: CollectionsCardAction
                }

            }));

});

export const DashBoardCollections = content;
