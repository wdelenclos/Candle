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
    services: ["scripts"],
    data: [
        {
            collection: "users",
            displayName: "Utilisateurs"
        },
        {
            collection: "coachs",
            displayName: "Coachs"
        },
    ]
};


/* Chaque service correspond à un fichier JS dans services
pour injecter des logiques disponibles dans les composants
disponible via
*/
