import {Candle} from '../../../core/core.js';


const data = [{"type":"local"},{"type":"bouleau"},{"Test":"1"}];
console.log(data);


var content = [];

data.forEach(function () {
    content.push(
        Candle.dom.createEl('div',
            {
                attrs: {
                    'class': 'column col-4 col-xs-12',
                    'style': 'cursor:pointer'
                },




            }));

});

export const Content = content;
