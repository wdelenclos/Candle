import {Candle} from '../../../core/core.js';


export var NavBarLeft = Candle.dom.createEl('section', {
    attrs: {
        "class": "navbar-section",
    },
    children: [
        Candle.dom.createEl('img', {
            attrs: {
                "src": "/assets/img/logo.png",
                "width": "105px"
            }
        })
    ],
});
