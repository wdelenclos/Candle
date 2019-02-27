export default (tagName, {attrs = {}, children = [], event = {}} = {}) => {
    return {
        tagName,
        attrs,
        children,
        event
    };
};
