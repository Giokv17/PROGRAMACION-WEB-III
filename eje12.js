function paso1(callback) {
  setTimeout(function() {
    console.log("Paso 1");
    callback();
  }, 1000);
}
function paso2(callback) {
  setTimeout(function() {
    console.log("Paso 2");
    callback();
  }, 1000);
}
function paso3(callback) {
  setTimeout(function() {
    console.log("Paso 3");
    callback();
  }, 1000);
}
// version con anidamiento
paso1(function() {
  paso2(function() {
    paso3(function() {
      console.log("Fin con callbacks anidados");
    });
  });
});
// version limpia con async/await
function paso1Promesa() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Paso 1");
      resolve();
    }, 1000);
  });
}
function paso2Promesa() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Paso 2");
      resolve();
    }, 1000);
  });
}
function paso3Promesa() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Paso 3");
      resolve();
    }, 1000);
  });
}
async function ejecutar() {
  await paso1Promesa();
  await paso2Promesa();
  await paso3Promesa();
  console.log("Fin con async/await");
}
ejecutar();
