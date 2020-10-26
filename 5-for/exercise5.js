// Exercise 5 - For

/*
    a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar 
    una alerta utilizando cada una de las palabras.
*/

var arreglo = ["uno", "dos", "tres", "cuatro", "cinco"];
var value = 1;
for (var i in arreglo){
    alert("Ejercicio a) Valor " + value + ": " + arreglo[i]);
    ++value;
}

/*
    b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
    modificada.
*/

var value = 1;
for (var j in arreglo){
    alert("Ejercicio b) Valor " + value + ": " + arreglo[j].substring(0,1).toUpperCase() + arreglo[j].substring(1).toLowerCase());
    ++value;
}

/*
    c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un 
    bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la 
    cadena completa.
*/

var sentence = "";
for (var k in arreglo){
    sentence += arreglo[k] + ", ";
}
alert("Ejercicio c) sentece: " + sentence);

/*
    d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es 
    decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 
    hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/

var arreglo2 = [];
for (var q = 0; q <= 9; q++){
    arreglo2.push(q);
}
console.log("Ejercicio d) arreglo: " + arreglo2);