import {Candle} from '../core.js';
import debug from '../cFunctions/debug.js';
import {typeCheck} from '../cFunctions/typeCheck.js';

const render = (vNode) => {
    if (vNode.attr && vNode.attr.candle) {
        debug('Rendering ' + vNode.attrs.candle, 'dev');
    }
    if (typeCheck(vNode, 'String')) {
        return document.createTextNode(vNode);
    }

    // we assume everything else to be a virtual element
    return renderElem(vNode);
};

const renderElem = function ({tagName, attrs, children, event}) {
    // create the element
    //   e.g. <div></div>
    const $el = document.createElement(tagName);

    // add all attributs as specified in vNode.attrs
    //   e.g. <div id="app"></div>
    for (const [k, v] of Object.entries(attrs)) {
        $el.setAttribute(k, v);
    }

    // append all children as specified in vNode.children
    //   e.g. <div id="app"><img></div>
    for (const child of children) {
        $el.appendChild(render(child));
    }
    if (typeCheck(event, 'object') && Object.keys(event).length) {
        Candle.dom.addEvent($el, event.trigger, event.action);
    }

    return $el;
};

export {render as default}