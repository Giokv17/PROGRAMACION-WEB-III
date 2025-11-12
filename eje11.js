function paso1() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Paso 1 completo");
    }, 1000);
  });
}
function paso2() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Paso 2 completo");
    }, 1000);
  });
}
function paso3() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Paso 3 completo");
    }, 1000);
  });
}
paso1()
  .then(function(mensaje1) {
    console.log(mensaje1);
    return paso2();
  })
  .then(function(mensaje2) {
    console.log(mensaje2);
    return paso3();
  })
  .then(function(mensaje3) {
    console.log(mensaje3);
  });
