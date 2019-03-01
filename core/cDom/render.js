import { Candle } from '../core.js';


/**
 * Render Node
 * @param vNode
 * @returns {Node}
 */
const render = (vNode) => {
    if(vNode.attr && vNode.attr.candle){
        Candle.functions.debug('Rendering '+ vNode.attrs.candle, 'dev');
    }
    if (Candle.functions.type(vNode, {'type':'string'})) {
        return document.createTextNode(vNode);
    }
    return renderElem(vNode);
};
/**
 *  Render element
 * @param tagName
 * @param attrs
 * @param children
 * @param event
 * @returns {HTMLElement}
 */
const renderElem =  function ({tagName, attrs, children, event}) {
    const el = document.createElement(tagName);
    for (const [k, v] of Object.entries(attrs)) {
        el.setAttribute(k, v);
    }
    for (const child of children) {
        el.appendChild(render(child));
    }
    if(Candle.functions.type(event, {'type':'object'}) && Object.keys(event).length){
        Candle.dom.addEvent(el, event.trigger, event.action);
    }

    return el;
};

export {render as default }