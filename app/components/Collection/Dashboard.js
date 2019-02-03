import { Candle } from '../../../core/core.js';


export const Dashboard = Candle.dom.createEl('container', {
    attrs: {
        "id": 'appContent',
        "candle": "content",
    },
    children: [
        Candle.dom.createEl('nav', {
            attrs: {
                "class": "flex items-center justify-between flex-wrap bg-teal p-6",
                "candle": "nav",
            },
        }),
    ],
});
