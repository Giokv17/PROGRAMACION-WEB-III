function tarea(ms) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Tarea en " + ms + " ms completada");
    }, ms);
  });
}

tarea(1000)
  .then(function(msg1) {
    console.log(msg1);
    return tarea(1500);
  })
  .then(function(msg2) {
    console.log(msg2);
    return tarea(2000);
  })
  .then(function(msg3) {
    console.log(msg3);
  });

// mismo ejemplo con async/await
async function ejecutarTareas() {
  let msg1 = await tarea(1000);
  console.log(msg1);

  let msg2 = await tarea(1500);
  console.log(msg2);

  let msg3 = await tarea(2000);
  console.log(msg3);
}

ejecutarTareas();
