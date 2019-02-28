/**
 * Add Event
 * @param node
 * @param event
 * @param action
 */
export function add(node, event, action) {
    node.addEventListener(event, action);
}

/**
 * Remove event
 * @param node
 * @param event
 * @param action
 */
export function remove(node, event, action) {
    node.addEventListener(event, action);
}