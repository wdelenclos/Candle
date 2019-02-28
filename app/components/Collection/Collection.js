import {Candle} from '../../../core/core.js';

import {CollectionArray} from './CollectionArray.js'
import {CollectionModal} from "./CollectionModal.js";

export const Collection = Candle.dom.createEl('div', {
    attrs: {
        "id": 'appContent',
        "class": "container",
        "style": "padding: 24px",
    },
    children: [
        Candle.dom.createEl('h4',
            {
                attrs: {
                    'style': 'margin: 24px 0'
                },
                children: [
                    Candle.dom.createEl('a',
                        {
                            attrs: {
                                'href' : '/'
                             },
                            children: [
                                Candle.dom.createEl('button',
                                    {
                                        attrs:{
                                            'class': 'btn',
                                            'style' : "    color: #f5a623; border-color: #f5a623; margin-right: 8px"
                                        },
                                        children:[
                                            Candle.dom.createEl('i',{
                                                attrs: {
                                                    'class': 'icon icon-arrow-left'
                                                }
                                            })
                                        ]
                                    })
                            ]
                        }),
                    "   Details de la collection"
                ]
            }
        ),
        Candle.dom.createEl('div',
            {
                attrs: {
                    'class': 'columns'
                },
                children: [CollectionArray]
            }
        )
    ],
});

