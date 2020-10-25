// Exercise 3 - Arrays

/*
    a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
    "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
*/

var months;
months = ["Enero", 
          "Febrero", 
          "Marzo", 
          "Abril", 
          "Mayo", 
          "Junio", 
          "Julio", 
          "Agosto", 
          "Septiembre", 
          "Octubre", 
          "Noviembre", 
          "Diciembre"];
console.log("Ejercicio a) Mes 5: " + months[4] + " Mes 11: " + months[10]);

/*
    b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

console.log("Ejercicio b) Meses ordenados: " + months.sort());

/*
    c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

months.unshift("Elemento inicial");
months.push("Elemento final");
console.log("Ejercicio c) Nuevos elementos: " + months);

/*
    d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

months.shift();
months.pop();
console.log("Ejercicio d) Elementos restantes: " + months);

/*
    e) Invertir el orden del array (utilizar reverse).
*/

console.log("Ejercicio e) Orden inverso: " + months.reverse());

/*
    f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/

console.log("Ejercicio f) Único string: " + months.join("-"));

/*
    g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
var somemonths;
somemonths = months.slice(4,11);
console.log("Ejercicio g) Array resultante: " + somemonths);