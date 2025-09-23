// Función original que usa callback
function tareaConCallback(callback) {
  console.log("[Callback] Iniciando tarea asíncrona...");
  setTimeout(function() {
    console.log("[Callback] Tarea completada, llamando al callback.");
    callback("Este es el resultado del callback.");
  }, 1000);
}

// Función que convierte el callback en una promesa
function callbackApromesa() {
  console.log("[Promesa] Envolviendo la función de callback en una promesa...");
  return new Promise(function(resolve) {
    tareaConCallback(function(resultado) {
      console.log("[Promesa] Resolviendo la promesa con el resultado del callback.");
      resolve(resultado);
    });
  });
}

callbackApromesa().then(function(msg) {
  console.log("[Final] La promesa recibió el siguiente mensaje:", msg);
});
