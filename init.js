import { Vrouter } from './core/vrouter/router.js';

// configuration
Vrouter.config({ mode: 'history'});


// adding routes
Vrouter.add(/home/, function() {
        console.log('collection');
    });

// forwarding
Vrouter.navigate('/home');


const $root = document.getElementById('root');

