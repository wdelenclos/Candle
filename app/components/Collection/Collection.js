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
                    "Details de la collection",
                    Candle.dom.createEl('a', {
                        attrs: {
                            "href": "#filter",
                            "class": "btn btn-link",
                            "aria-label": "Open",
                            "style": "color: #222; display: inline;"
                        },
                        children: [
                            "Filtrer",
                        ]
                    }),CollectionModal
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

