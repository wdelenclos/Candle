import {Candle} from '../../../core/core.js';

import { CollectionArray } from './CollectionArray.js'

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
                                            'class': 'btn btn-primary'
                                        },
                                        children:[
                                            'Retour'
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

