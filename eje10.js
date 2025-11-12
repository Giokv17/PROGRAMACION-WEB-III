// callback
function hacerTareaCallback(callback) {
  console.log("Iniciando tarea con callback...");
  setTimeout(function() {
    console.log("Tarea terminada con callback");
    callback(); 
  }, 2000);
}
hacerTareaCallback(function() {
  console.log("Callback ejecutado despues de la tarea");
});
// promesa
function hacerTareaPromesa() {
  console.log("Iniciando tarea con promesa...");
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("Tarea terminada con promesa");
      resolve("Promesa resuelta con exito");
    }, 2000);
  });
}
hacerTareaPromesa().then(function(mensaje) {
  console.log(mensaje);
});
