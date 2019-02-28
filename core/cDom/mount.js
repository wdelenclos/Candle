import debug from '../cFunctions/debug.js';

/**
 *  Mount element
 * @param node
 * @param target
 * @returns {*}
 */
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