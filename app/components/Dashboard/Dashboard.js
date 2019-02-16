import {Candle} from '../../../core/core.js';

import { DashBoardCollections } from './DashBoardCollections.js'
export const Dashboard = Candle.dom.createEl('div', {
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
                    "Vos Collections"
                ]
            }
        ),
        Candle.dom.createEl('div',
            {
                attrs: {
                    'class': 'columns'
                },
                children: DashBoardCollections
            }
        )
    ],
});

