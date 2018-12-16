import { Vdom } from './core/vdom/vdom.js';

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