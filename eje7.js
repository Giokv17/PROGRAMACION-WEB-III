let valores = [1, 2, 3, 4, 5, 6];
let [a, b, ...resto] = valores;
console.log("Primer elemento:", a);
console.log("Segundo elemento:", b);
console.log("Resto de elementos:", resto);
console.log("=================");
console.log("Arreglo original:", valores);

// Procesar el resto usando un callback
function procesarConCallback(arr, callback) {
	console.log("[Callback] Procesando el resto de elementos...");
	setTimeout(function() {
		const resultado = arr.map(x => x * 2); 
		callback(resultado);
	}, 1000);
}
procesarConCallback(resto, function(res) {
	console.log("[Callback] Resultado:", res);
});
// Procesar el resto usando una promesa
function procesarConPromesa(arr) {
	console.log("[Promesa] Procesando el resto de elementos...");
	return new Promise(function(resolve) {
		setTimeout(function() {
			const resultado = arr.map(x => x * 3); 
			resolve(resultado);
		}, 1000);
	});
}
procesarConPromesa(resto).then(function(res) {
	console.log("[Promesa] Resultado:", res);
});
