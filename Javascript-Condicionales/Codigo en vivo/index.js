/* let color = "Rojo";

if (color === "Azul") {
    console.log("Si, el color es Rojo")
} */

/* let edad = 18;

if (edad > 18 && edad < 40) {
    console.log("Puede pasar")
} else if (edad === 18) {
    console.log("Tienes 18, puedes pasar")
} else if (edad <= 0) {
    console.log("Disculpa, no podrias ser un ser humano")
} else if (edad === 17 || edad === 16) {
    console.log("Puedes pasar con autorizacion de tus padres")
} else {
    console.log("No, no puedes pasar, eres menor de edad")
} */

//   ||   or    o
//   &&   and   y


// edad = 56
/* const controlBaile = edad => {
    if ((edad > 18 && edad <= 40) || edad >= 55) {
    //   (  si      y    no     )  o    si
    //         false               o     true
    //              Se cumple la condicion del if
        return "Puede pasar"
    } else if (edad === 18) {
        return "Tienes 18, puedes pasar"
    } else if (edad <= 0) {
        return "Disculpa, no podrias ser un ser humano"
    } else if (edad === 17 || edad === 16) {
        return "Puedes pasar con autorizacion de tus padres"
    } else {
        return "No, no puedes pasar, eres menor de edad"
    }
}

console.log("Primer persona", controlBaile(25))
console.log("Segunda persona", controlBaile(16))
console.log("Tercer persona", controlBaile(45))
console.log("Cuarta persona", controlBaile(-5))
 */



/* 
       *** METODOS DE STRING ***
*/
let saludo = "Hola, soy Giordano"

/* console.log(saludo.length) */
/* console.log(saludo.replace("Hola", "Chau")) */
/* console.log(saludo.toLowerCase()) */
/* console.log(saludo.toUpperCase()) */
/* console.log(saludo.concat(", y yo soy Angel")) */
/* console.log("Hola".length) */



/* 
       *** METODOS DE NUMBER ***
*/

let num1 = 10.77;

/* console.log(num1.toString()) */
/* console.log(parseInt(num1)) */
/* console.log(parseInt(Math.random() * 100)) */
/* console.log(Math.floor(num1))  // Redonde hacia abajo
console.log(Math.round(num1))   //Redondea hacia arriba
 */
console.log(Number.isInteger(num1))