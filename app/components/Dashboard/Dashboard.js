import {Candle} from '../../../core/core.js';

import { DashBoardCollections } from './DashBoardCollections.js'
import { DashBoardDb } from './DashBoardDb.js'

export var Dashboard = Candle.dom.createEl('div', {
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
                    "Database"
                ]
            }
        ),
        Candle.dom.createEl('div',
            {
                attrs: {
                    'class': 'columns'
                },
                children: DashBoardDb
            }
        ),
        Candle.dom.createEl('h4',
            {
                attrs: {
                    'style': 'margin: 48px 0 32px'
                },
                children: [
                    "CollectionsContent list"
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

