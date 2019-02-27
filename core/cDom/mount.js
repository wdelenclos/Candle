import debug from '../cFunctions/debug.js';

export default (node, target) => {
    if (target === null) {
        debug(' Target of rendering is null', 'err');
    }
    else {
        debug('Mounting ' + node.id, 'dev');
        target.appendChild(node);
        return node;
    }
};