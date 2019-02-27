function primitiveTypeCheck(data, type) {
    switch (typeof data) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof data;
        case "object":
            switch (type) {
                case "null":
                    return data === null;
                case "array":
                    return Array.isArray(data);
                default:
                    return data !== null && !Array.isArray(data);
            }

    }
    return false;
}

function complexTypeCheck(data, conf) {
    for (var key of Object.keys(conf)) {
        switch (key) {
            case 'type':
                if (!primitiveTypeCheck(data, conf[key])) return false;
                break;
            case 'value':
                if (JSON.stringify(data) !== JSON.stringify(conf[key])) return false;
                break;
            case 'enum':
                var valid = false;
                for (var value of conf[key]) {
                    valid = complexTypeCheck(data, {value});
                    if (valid) break;
                }
                if (!valid) return false;
        }
    }

    return true;
}

export function typeCheck(data, conf) {
    for (var key of Object.keys(conf)) {
        switch (key) {
            case 'type':
            case 'value':
            case 'enum':
                var newConf = {};
                newConf[key] = conf[key];
                if (!complexTypeCheck(data, newConf)) return false;
                break;
            case 'properties':
                for (let prop of Object.keys(conf[key])) {
                    if (data[prop] === undefined) return false;
                    if (!typeCheck(data[prop], conf[key][prop])) return false;
                }
                break;
        }
    }
    return true;
}

