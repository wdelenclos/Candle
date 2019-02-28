import { Candle } from '../../../core/core.js';
import { Detail } from '../../components/Detail.js'

export default function(){
    Candle.router.navigate('/collection', "Collection | Candle", Detail, this);
    Candle.data.getDoc(document.origin.dataset.collection,function(doc){
        const data = [];
        doc.forEach(function(el) {
            data.push(el);
        });

        var trArray = [];
        var thArray = [];
        function renderTd(el, type){
            let tdArr = [];
            if(type === "head"){
                for (var property in el) {
                    tdArr.push(
                        Candle.dom.createEl('td', {
                            attrs:{
                              'class' : "text-bold"
                            },
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

        thArray.push(
            Candle.dom.createEl('tr',
                {
                    children: renderTd(data[0], 'head')

                }));



        const tables = Candle.dom.createEl('table', {
            attrs: {
                'class': 'table'
            },
            children: [
                Candle.dom.createEl('thead', {
                        children: thArray
                    }
                ),
                Candle.dom.createEl('tbody', {
                        children: trArray
                    }
                )
            ]

        });
        Candle.dom.replaceEl(Candle.dom.renderEl(tables) , document.getElementById('content'));

    });

}