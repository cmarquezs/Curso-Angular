/*  
    INTRODUCCION A JAVASCRIPT
    - Sintaxis basica
    - Variables y constantes
    - Tipos de datos primitivos
    - Ejercicio: Crear un programa que calcule el perimetro de un rectangulo
    
*/ 

/* tipos de datos   
    numeros
    cadena de textos
    valores boleanos
    objetos
    arrays
    funciones
    valores especiales

    typeof - identifica el tipo de dato de las variables
*/

console.log(typeof 123);
console.log(typeof "Hola test");

/* variables y constantes
    - Una variable puede cambiar de valor durante la ejecucion del programa
    - Una constante es un valor que no puede ser modificado durante la ejecucion del programa
*/

let edad = 25;
edad = 20;
const PI = 3.14159;

console.log("Mi edad es: " + edad); 

/* Ejercicio: Crear un programa que calcule el perimetro de un rectangulo
    - Definir dos variables para las dimensiones del rectangulo (base y altura)
    - Calcular el perimetro utilizando la formula: perimetro = 2 * (base + altura)
    - Mostrar el resultado en consola
*/

let base = 5;
let altura = 4;

let perimetro = 2 * (base + altura);

console.log("El perimetro del restangulo es: " + perimetro);