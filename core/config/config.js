// Candle.js configuration file


export var config = {
    // MODES : string ( dev || prod )
    mode: "dev",
    container: "app",
    base:{
        apiKey: "",
        authDomain: "",
        databaseURL:"",
        projectId:"",
        storageBucket:"",
        messagingSenderId: ""
    },
    // Services : [array]
    services: ["scripts"],
    data: [
        {
            document: "Users"
        },
        {},
        {},
    ]
};


/* Chaque service correspond à un fichier JS dans services
pour injecter des logiques disponibles dans les composants
disponible via
*/
