function type_check_v2(data, conf) {
    for (var key of Object.keys(conf)) {
        switch (key) {
            case 'type':
                if (!type_check_v1(data, conf[key])) return false;
                break;
            case 'value':
                if (JSON.stringify(data) !== JSON.stringify(conf[key])) return false;
                break;
            case 'enum':
                var valid = false;
                for (var value of conf[key]) {
                    valid = type_check_v2(data, {value});
                    if (valid) break;
                }
                if(!valid) return false;
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
                    if (!type_check_v2(data, newConf)) return false;
                    break;
                case 'properties':
                    for (let prop of Object.keys(conf[key])) {
                        if (data[prop] === undefined) return false;
                        if (!type_check(data[prop], conf[key][prop])) return false;
                    }
                    break;
            }
        }
        return true;
}

