// Candle.js configuration file


export var config = {
  // MODES : string ( dev || prod )
  mode: "dev",
  container: "app",
 // Services : [array]
  services: ["firebase", "scripts"]
};



/* Chaque service correspond à un fichier JS dans cServices
pour injecter des logiques disponibles dans les composants
disponible via
*/
