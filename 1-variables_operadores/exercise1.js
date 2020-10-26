// Exercise 1 - Variables y operadores

/*
    a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en 
    una 3er variable.
*/

var a, b, c;
a = 10;
b = 15;
c = a + b;
console.log("Ejercicio a) Suma: " + c);

/*
    b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
*/

var str1, str2, str3;
str1 = "Hola ";
str2 = "Mundo";
str3 = str1 + str2;
console.log("Ejercicio b) Concatenación: " + str3);

/*
    c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando 
    el resultado la suma una 3er variable (utilizar length).
*/

var str4, str5, len;
str4 = "String1";
str5 = "String2";
len = str4.length + str5.length;
console.log("Ejercicio c) Length: " + len);