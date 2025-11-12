// Funcion que retorna una promesa
function obtenerDatos() {
  console.log("[Promesa] Iniciando carga de datos...");
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("[Promesa] Datos cargados, resolviendo promesa.");
      resolve("Datos cargados correctamente");
    }, 1000);
  });
}
// Uso de la funcion con promesa
obtenerDatos().then(function(msg) {
  console.log("[Promesa] Resultado recibido:", msg);
});

// Version migrada usando async/await
async function ejecutarDatos() {
  console.log("[Async/Await] Iniciando carga de datos...");
  let msg = await obtenerDatos();
  console.log("[Async/Await] Resultado recibido:", msg);
}

ejecutarDatos();
