/**
 * Create element
 * @param tagName
 * @param attrs
 * @param children
 * @param event
 * @returns {{tagName: *, attrs, children: Array, event}}
 */
export default (tagName, {attrs = {}, children = [], event = {}} = {}) => {
    return {
        tagName,
        attrs,
        children,
        event
    };
};
