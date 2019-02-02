import { Candle } from '../../../core/core.js';
import { config } from '../../../core/config/config.js'


export const NavModal = Candle.create('div', {
    attrs: {
        "uk-modal" : "",
        "id": "modal-example"
    },
    children: [
        Candle.create('div', {
            attrs: {
                "class": "uk-modal-dialog uk-modal-body",
            },
            children: [
                Candle.create('h2', {
                    attrs: {
                        "class": "uk-modal-title",
                    },
                    children: [
                        "Configuration active"
                    ]
                }),
                Candle.create('p', {
                    children: [
                        JSON.stringify(config, null, 4)
                    ]
                }),
            ],
        }),
    ],
});
