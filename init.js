import { Candle } from './core/core.js'
import { App } from './app/components/App.js';

// Add services
Candle.services();


// configuration
Candle.router.config({ mode: 'history'});

// returning the user to the initial state
Candle.router.navigate();
// adding routes
Candle.router
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
Candle.router.navigate('/dashboard');
let content = Candle.render(App);
Candle.mount(content, document.getElementById('app'));


