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


var collectionArray = [];

data.forEach(function (el) {
    collectionArray.push(
        Candle.dom.createEl('tr',
            {

                children: [Candle.dom.createEl('td',
                    {
                        children: [el.type]
                    })]


            }));

});

const tables = Candle.dom.createEl('table', {
    attrs: {
        'class': 'table'
    },
    children: [
        Candle.dom.createEl('tbody', {
                children: collectionArray
            }
        )
    ]

});

export const CollectionArray = tables;
