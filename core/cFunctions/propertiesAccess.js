export default (object, path) => {
    object = object || {};
    if (!path) return object;
    const pathArray = path.split(".");

    for (let i = 0; i < pathArray.length; i++) {
        object = object[pathArray[i]];
        if (object === undefined) {
            console.log(pathArray.slice(0, i + 1).join('.') + " not exist");
            return null;
        }
    }

    return object;
}