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


var trArray = [];

function renderTd(el, type){
    let tdArr = [];
    if(type === "head"){
        for (var property in el) {
            tdArr.push(
                Candle.dom.createEl('td', {
                    children: [property]
                })
            )
        }
    }
    else if (type === "body"){
        for (var property in el) {
            let val = JSON.stringify(el[property]);
            tdArr.push(
                Candle.dom.createEl('td', {
                    children: [val]
                })
            )
        }
    }

    return tdArr;
}

data.forEach(function (el) {
    trArray.push(
        Candle.dom.createEl('tr',
            {
                        children: renderTd(el, 'body')
            }));

});

const tables = Candle.dom.createEl('table', {
    attrs: {
        'class': 'table'
    },
    children: [
        Candle.dom.createEl('tbody', {
                children: trArray
            }
        )
    ]

});

export const CollectionArray = tables;
