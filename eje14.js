// Funcion que retorna una promesa 
function promesa() {
  console.log("[Promesa] Iniciando operacion asincrona...");
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("[Promesa] Operacion completada, resolviendo promesa.");
      resolve("Este es el resultado exitoso de la promesa.");
    }, 1000);
  });
}

// Funcion que convierte la promesa en un callback 
function promesaAcallback(callback) {
  console.log("[Callback] Esperando el resultado de la promesa...");
  promesa().then(function(resultado) {
    console.log("[Callback] Recibido el resultado de la promesa.");
    callback(resultado);
  });
}

promesaAcallback(function(mensaje) {
  console.log("[Final] El callback recibio el siguiente mensaje:", mensaje);
});
