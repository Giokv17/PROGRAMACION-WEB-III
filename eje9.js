function miPromesa() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Exito: la promesa se resolvio despues de 3 segundos");
    }, 3000); 
  });
}

miPromesa().then(function(mensaje) {
  console.log(mensaje);
});
