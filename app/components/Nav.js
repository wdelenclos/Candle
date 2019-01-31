import { Candle } from '../../core/core.js';


export const Nav = Candle.create('nav', {
    attrs: {
        "id": 'appContainer',
        "class": "container",
        "candle": "container",
    },
    children: [
        Candle.create('nav', {
            attrs: {
                "class": "flex items-center justify-between flex-wrap bg-teal p-6",
                "candle": "nav",
            },
            children: [
                Candle.create('div', {
                    attrs: {
                        "class": "flex items-center flex-no-shrink text-white mr-6",
                    },
                    children: [
                        "Test"
                    ]
                }),
                Candle.create('div', {
                    attrs: {
                        "class": "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
                    },
                    children: [
                        "Test"
                    ]
                })
            ]
        }),
    ],
});
