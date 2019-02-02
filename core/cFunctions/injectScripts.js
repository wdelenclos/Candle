import debug from '../cFunctions/debug.js';
import { config } from '../config/config.js';

var services = [];

const getModules = function(callback) {
    config.services.forEach(function (element) {
        debug('Inject ' + element, 'dev');
        const module = '../../services/' + element + '/index.js';
        import(module).then(function (service) {
            services.push(service.init);
            callback();
        }).catch(error => {
            debug('Failed to inject the module: ' + element,"err");
            debug('--> '+error, "err")
        });
    });
};


const inject = function() {
    getModules(function(){
        for (let i = 0; i < services.length; i++) {
            let s = document.createElement('script');
            s.type = 'text/javascript';
            s.innerHTML = "var Cndl"+ i + " = ";
            s.innerHTML += services[i];
            s.innerHTML +=   '; Cndl'+ i +'();';
            document.getElementsByTagName('head')[0].appendChild(s);
        }
    });

};

export { inject };