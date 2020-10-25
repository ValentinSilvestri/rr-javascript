// Exercise 2 - Strings

/*
    a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar 
    toUpperCase).
*/

var str1;
str1 = "Cadena de caracteres 1";
str1.toUpperCase();

/*
    b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
    caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

var str2, str3;
str2 = "Segunda cadena";
str3 = str2.substring(0,5);

/*
    c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
    caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

var str4, str5;
str4 = "Cuarta cadena";
str5 = str4.substring(str4.length,str4.length-3);

/*
    d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
    en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
    toLowerCase y el operador +).
*/

var str6, str7;
str6 = "EJERCICIO numero 6.";
str7 = str6.substring(0,1).toUpperCase() + str6.substring(1).toLowerCase();

/*
    e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
    del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var str8, var1;
str8 = "Cadena con espaciones en blanco";
var1 = str8.indexOf(" ");

/*
    f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
    palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
    operador +).
*/

var str9, str10;
str9 = "impresionante ejercicio.";
str10 = str9.substring(0,1).toUpperCase() + 
    str9.substring(1,str9.indexOf(" ")+1).toLowerCase() + 
    str9.substring(str9.indexOf(" ")+1,str9.indexOf(" ")+2).toUpperCase() + 
    str9.substring(str9.indexOf(" ")+2).toLowerCase();