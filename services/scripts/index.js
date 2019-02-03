/*
/ Candle JS Module
/ - Export with init method
*/


export const init = function(){
    const dependencies = [
        {
            type: "stylesheet",
            uri: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css"
        },
        {
            type: "script",
            uri: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js"
        },
        {
            type: "script",
            uri: "https://www.gstatic.com/firebasejs/5.2.0/firebase.js"
        }
    ];
    dependencies.forEach(function(element) {
        if(element.type === "script"){
            let s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = element.uri;
            document.getElementsByTagName('head')[0].appendChild(s);

        }
        else if(element.type === "stylesheet"){
            let s = document.createElement('link');
            s.rel = 'stylesheet';
            s.href = element.uri;
            document.getElementsByTagName('head')[0].appendChild(s);

        }
        else{
            console.log("Type inconnu");
        }
    });


};
