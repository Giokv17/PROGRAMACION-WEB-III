function ejecutarDespues(callback) {
  setTimeout(function() {
    callback();
  }, 2000); 
}

function miFuncion() {
  console.log("Se ejecuto el callback despues de 2 segundos");
}

ejecutarDespues(miFuncion);
