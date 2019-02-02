import { Candle } from '../../../core/core.js';


export const Content = Candle.create('container', {
    attrs: {
        "id": 'appContent',
        "candle": "content",
    },
    children: [
        Candle.create('nav', {
            attrs: {
                "class": "flex items-center justify-between flex-wrap bg-teal p-6",
                "candle": "nav",
            },
        }),
    ],
});
