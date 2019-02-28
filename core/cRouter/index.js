import {Candle} from '/core/core.js'
import {config} from '/core/config/config.js'

const TITLE_DEFAULT = "Content";

function sanitizePath(path) {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
}

/**
 * Router
 */
export default class cRouter {
    /**
     * Constructor
     * @param root
     */
    constructor(root = '/') {
        this.navigations = [];
        this.root = root;
    }

    /**
     *
     * @param navPath
     */
    track(navPath) {
        const referrer = document.referrer;
        this.navigations.push({ navPath, referrer });
        Candle.functions.debug('Navigation to ' + this.navigations[0].navPath, 'dev');
    }

    /**
     * Navigation
     * @param path
     * @param title
     * @param node
     * @param origin
     */
    navigate(path = '', title = TITLE_DEFAULT, node, origin = null) {
        document.origin = origin;
        document.context = {path, title, node};
        const navPath = this.root + sanitizePath(path);
        this.track(navPath);
        document.title = title;
        if (history && navPath) {
            history.pushState(null, null, navPath);
        }
        document.content =  Candle.dom.renderEl(node);
        Candle.dom.replaceEl(document.content, document.getElementById(config.container));
    }
}

