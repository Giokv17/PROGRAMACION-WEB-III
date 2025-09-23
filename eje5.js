function miFuncion(cadena) {
  let izquierda = 0;
  let derecha = cadena.length - 1;

  while (izquierda < derecha) {
    if (cadena[izquierda] !== cadena[derecha]) {
      return false;
    }
    izquierda++;
    derecha--;
  }
  return true;
}

let band1 = miFuncion("oruro");
console.log("Oruro es palindromo?");
console.log(band1); 
console.log("Hola es palindromo?");
let band2 = miFuncion("hola");
console.log(band2); 