import {Candle} from '../../../core/core.js';


export const NavBarLeft = Candle.dom.createEl('section', {
    attrs: {
        "class": "navbar-section",
    },
    children: [
        Candle.dom.createEl('img', {
            attrs: {
                "src": "/assets/img/logo.svg",
                "width": "105px"
            }
        })
    ],
});
