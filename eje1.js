function miFuncion(texto) {
  let resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  texto = texto.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (letra === "a") resultado.a++;
    else if (letra === "e") resultado.e++;
    else if (letra === "i") resultado.i++;
    else if (letra === "o") resultado.o++;
    else if (letra === "u") resultado.u++;
  }

  return resultado;
}

let obj1 = miFuncion("euforia");
console.log("Contar vocales en 'euforia':");
console.log("=================");
console.log(obj1); 