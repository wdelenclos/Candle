import debug  from '../cFunctions/debug.js';

/**
 * Replace Dom
 * @param node
 * @param target
 * @returns {*}
 */
export default (node, target) => {
    if(target === null ){
        debug('Target of rendering is empty', 'err');
    }
    else{
        debug('Mounting ' + node.id, 'dev');
        target.innerHTML = "";
        target.appendChild(node);
        return node;
    }
};