import { Candle } from '../../../core/core.js';
import { config } from '../../../core/config/config.js'

export const NavModal = Candle.dom.createEl('div', {
    attrs: {
        "uk-modal" : "",
        "id": "modal-example"
    },
    children: [
        Candle.dom.createEl('div', {
            attrs: {
                "class": "uk-modal-dialog uk-modal-body",
            },
            children: [
                Candle.dom.createEl('h2', {
                    attrs: {
                        "class": "uk-modal-title",
                    },
                    children: [
                        "Configuration active"
                    ]
                }),
                Candle.dom.createEl('pre', {
                    children: [
                        JSON.stringify(config, null, 4)
                    ]
                }),
            ],
        }),
    ],
});
