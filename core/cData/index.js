import { Candle } from '/core/core.js'
import { config } from '/core/config/config.js'


export default class cData {
    constructor(root = '/') {
        var config = {
            apiKey: "<API_KEY>",
            authDomain: "<PROJECT_ID>.firebaseapp.com",
            databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
            projectId: "<PROJECT_ID>",
            storageBucket: "<BUCKET>.appspot.com",
            messagingSenderId: "<SENDER_ID>",
        };
        firebase.initializeApp(config);
    }

    getDocument(navPath) {
        const referrer = document.referrer;
        this.navigations.push({ navPath, referrer });
        Candle.functions.debug('Navigation to ' + this.navigations[0].navPath, 'dev');
    }

    navigate(path = '', title = TITLE_DEFAULT, node) {
        const navPath = this.root + sanitizePath(path);
        this.track(navPath);
        document.title = title;
        if (history && navPath) {
            history.pushState(null, null, navPath);
        }
        document.content =  Candle.render(node);
        Candle.mount(document.content, document.getElementById(config.container));
    }
}

