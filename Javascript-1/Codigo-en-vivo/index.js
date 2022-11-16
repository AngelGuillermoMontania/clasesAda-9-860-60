/* console.log()  me permite imprimir por consola */

/* ==========================
           DATOS PRIMITIVOS
========================== */

    /* String */
    /* console.log('Hello')
    console.log("Hello2") */
    /* console.log("70") */
    

    /* Number  */
    /* console.log(70)
    console.log(15080070)  */
   

    /* Boolean */
    /* console.log(true)   //1   //Encendido
    console.log(false)  */  //0   //Apagado

    /* Null */
    /* console.log(null)  //No existe y no esta en ningun lugar
   
    /* Undefined */
    /* console.log(undefined) */    //Si existe pero no tiene valor
   



   
   /* console.log("true") */
   
    /*  typeof */
   /* console.log(typeof 40) */
   


/* ==========================
    VARIABLES
========================== */

/* var hoja = 5;
var num2 = 3;
//var es una variable, que puedo modificar y tiene scope global

hoja = 10;

console.log(num1); */

//let y const

/* let saludo = "Hello"
//let es una variable, mas debil que puedo modificar y tiene limite de scope
saludo = "Bye"
console.log(saludo) */


/* const saludo = "Hello"
// const es una variable, no se puede modificar y tiene limite de scope
saludo = "Bye"
console.log(saludo) */










/* ==========================
OPERADORES DE ASIGNACIÓN
========================== */

// El operador "=" sirve para asignar un valor

/* let edad = 40 */



/* ==========================
OPERADORES ARITMÉTICOS
========================== */

// Nos permiten hacer operaciones matemáticas
/* 
10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1
*/






/* ==========================
OPERADORES DE COMPARACIÓN SIMPLE
se declara ==, !=
========================== */
/* 
10 == 15 //---> Igualdad
10 != 15 //---> Desigualdad
 */
/* console.log(10 != 15) */


/* ==========================
OPERADORES DE COMPARACIÓN ESTRICTA
se declara ===, !==
========================== */
/* 
10 === 15 //---> Estrictamente igual (mismo valor y tipo de dato)
10 !== 15 //---> Compara si los operandos no son iguales y/o no del mismo tipo

console.log(10 == "10") */


/* ==========================
OPERADORES RELACIONALES
========================== */
/* 
15 > 10  //---> Mayor que...
15 >= 10  //---> Mayor o igual que...
15 < 10  //---> Menor que...
15 <= 10  //---> Menor o igual que...
 */

/* console.log(15 <= 15) */



/* ==========================
OPERADORES LÓGICOS

and  -----> && ----> y
or   -----> || ----> o

========================== */

// Permiten combinar valores booleanos y su resultado a la vez también es un booleano

// && Todos sus valores deben evaluar como TRUE
/* (10 > 15) && (10 != 20) //--->  */
/* console.log((10 > 15) && (10 != 20)) */



/* console.log(1 == 1 && 2 == 5) */
//               true  y  false

// || (OR) Solo un valor debe evaluar como TRUE para que la expresión sea TRUE
/* 
(10 > 15) || (10 != 20) //---> TRUE porque 10 != 20 es verdadero
 */


/* console.log(1 == 5 || 2 == 8) */
//           false  o false
//                false


// !(NOT) - Niega la condición, TRUE pasa a FALSE y FALSE a TRUE








/*
let color = 'Verde';
let noEsRojo = !(color == 'Rojo'); //---> Esto daría FALSE, pero como está negado, da TRUE

    console.log(5 == "5")
    console.log(5 === "5") */
    /* console.log(5 == "7") */
    /* console.log(5 !== "5") */

    /* console.log("hello " + 5) */
    /* =======>   Convierte el 5 que esta del tipo number a tipo string */


    //console.log(undefined == null)
    //console.log(undefined === null)
    //console.log(hello)

    /* EcmaScript6
    let, const */

    /* const nombre = "Guille";
    nombre = "Alberto" */

    /* let nombre = "Guille"
    nombre = "Alberto"
    const edad = 17
    const saludar = `Hola! ${nombre}, soy de Jujuy, tengo ${edad}` */

    /* console.error(saludar) */


/* console.log("FUNCIONO PERFECTO, ME LINKIE") */

/* alert("Hace click aca para ganar un millon de dolares?") */
const datosDeRobo = prompt("Dame tu dni y cbu y te paso 5 millones de dolares?")
console.log(datosDeRobo)
/* const edad = prompt("Cual es tu edad?")
const nombre = prompt("Cual es tu nombre?")
console.log(`Hola, tu tienes ${edad} y te llamas ${nombre}`) */
