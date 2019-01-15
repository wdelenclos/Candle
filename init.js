import { Vrouter } from './core/vrouter/router';
import { App } from './app/components/App';
// configuration
Vrouter.config({ mode: 'history'});

// returning the user to the initial state
Vrouter.navigate();

App.init();

// adding routes
Vrouter
    .add(/dashboard/, function() {
        console.log('⚓ Dashboard');
    })
    .add(/products\/(.*)\/edit\/(.*)/, function() {
        console.log('products', arguments);
    })
    .add(function() {
        Vrouter.navigate('/dashboard');
    });

// forwarding
Vrouter.navigate('/dashboard');


const $root = document.getElementById('root');

