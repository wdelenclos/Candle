import {Candle} from '../../../core/core.js';

const data = [{
    id: 1,
    type: "entomophiles",
    famille: "Acéracées",
    name: "Érables",
    zone: "europe"
}, {
    id: 2,
    type: "entomophiles",
    famille: "Acéracées",
    name: "Érables",
    zone: "europe"
}, {
    id: 3,
    type: "entomophiles",
    famille: "Acéracées",
    name: "Érables",
    zone: "europe"
}];
var array=[];
array.push(
    Candle.dom.createEl('label', {
        attrs: {
            "class": "form-checkbox",
        },
        children: [
            Candle.dom.createEl('input', {
                attrs: {
                    "type": "checkbox",
                }, children: [
                    Candle.dom.createEl('i', {
                        attrs: {
                            "class": "form-icon"
                        }
                    }), "label"
                ]
            })

        ]
    }));

export const CollectionModal = Candle.dom.createEl('div', {
    attrs: {
        "class": "modal",
        "id": "filter",

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
                                    "Filtrer le tableau"
                                ]
                            }
                        ),
                        Candle.dom.createEl('a', {
                                attrs: {
                                    "class": "btn btn-clear float-right",
                                    "href": "#close",
                                    "aria-label": "Close"
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
                            children: array
                        })
                    ],
                }),
            ],
        })]
});
