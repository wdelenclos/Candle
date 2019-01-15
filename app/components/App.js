import { Vdom } from './core/vdom/vdom.js';

export const App = {
    init(){
        const root = document.getElementById('app');
        const el = Vdom.el(
            'ul',
            null,
            this.el(
                'li',
                null,
                'item 1'
            ),
            this.el(
                'li',
                null,
                'hello!'
            )
        );
        Vdom.updateElement(root, el);
    },
    updateNav(){

    },
};