import { Candle } from '../../../core/core.js';
import { NavBarLeft } from './NavBarLeft.js';
import { NavBarRight } from './NavBarRight.js';

export var Nav = Candle.dom.createEl('header', {
    attrs: {
        "class": "navbar",
        "candle": "nav",
        "style": "background: #fff; border: solid 1px #f7f8f9; padding : 16px 32px; -webkit-box-shadow: 10px 6px 44px -10px rgba(0,0,0,0.24); -moz-box-shadow: 10px 6px 44px -10px rgba(0,0,0,0.24); box-shadow: 10px 6px 44px -10px rgba(0,0,0,0.24);"
    },
    children: [
        NavBarLeft,
        NavBarRight
    ],
});
