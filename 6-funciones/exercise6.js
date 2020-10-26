// Exercise 6 - Funciones

/*
    a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
    resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

function suma(num1, num2){
    return num1 + num2;
}
var resultado = suma(Math.round(Math.random()*10),Math.round(Math.random()*10));
console.log("Ejercicio a) Suma: " + resultado);

/*
    b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
    mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

function suma2(num1, num2){
    if (typeof(num1)!=="number" || typeof(num2)!=="number"){
        alert("b) Al menos uno de los valores ingresados es erroneo.");
        return NaN;
    } else {
        return num1 + num2;
    }
}
var resultado = suma2("error",Math.round(Math.random()*10));
console.log("Ejercicio b) Suma: " + resultado);

/*
    c) Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
*/

function validate(num){
    if ((num % 1) == 0){
        return "Número entero";
    } else {
        alert("c) El número ingresado no es entero");
        return "El número no es entero";
    }
}
console.log("Ejercicio c) Validación: " + validate(50.1));

/*
    d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que 
    haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

function validate2(num1, num2){
    if ((num1 % 1) !== 0){
        var inum1 = Math.round(num1);
        alert("d) Número 1 no entero. Redondeo: " + inum1);
    } else {
        var inum1 = num1;
    }
    if ((num2 % 1) !== 0){
        var inum2 = Math.round(num2);
        alert("d) Número 2 no entero. Redondeo: " + inum2);
    } else {
        var inum2 = num2;
    }
    return [inum1, inum2];
}

function suma3(num1, num2){
    if (typeof(num1)!=="number" || typeof(num2)!=="number"){
        alert("d) Al menos uno de los valores ingresados es erroneo.");
        return NaN;
    } else {
        var array;
        array = validate2(num1, num2)
        return array[0] + array[1];
    }
}

var resultado = suma3(Math.random()*10,Math.round(Math.random()*10));
console.log("Ejercicio d) Suma: " + resultado);

/*
    e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando 
    que todo siga funcionando igual.
*/

function validate3(num1, num2){
    if (typeof(num1)!=="number" || typeof(num2)!=="number"){
        alert("e) Al menos uno de los valores ingresados es erroneo.");
        return NaN;
    } else {
        return [num1, num2];
    }
}

function suma4(num1, num2){
    var array2 = validate3(num1, num2);
    return array2[0] + array2[1];
}
var resultado = suma4("error",Math.round(Math.random()*10));
console.log("Ejercicio e) Suma: " + resultado);






