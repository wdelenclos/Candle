import debug  from '../cFunctions/debug.js';
import { typeCheck } from '../cFunctions/typeCheck.js';

export function add(node, event, action) {
    node.addEventListener(event, action);
}

export function remove(node, event, action) {
    node.addEventListener(event, action);
}