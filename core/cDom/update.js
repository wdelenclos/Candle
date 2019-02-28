/**
 * Update dom
 * @param tagName
 * @param attrs
 * @param children
 * @returns {{tagName: *, attrs, children: Array}}
 */
export default (tagName, {attrs = {}, children = []} = {}) => {
    return {
        tagName,
        attrs,
        children,
    };
};
