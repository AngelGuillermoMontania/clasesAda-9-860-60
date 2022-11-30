/* function Sumar () { //Funcion nombrada
    const a = 10;
    const b = 25;
    return a + b
} */

/* const Sumar = function () {  //Funcion anonima
    const a = 10;
    const b = 25;
} */

// Arrow Function
/* const Sumar = () => {
    const a = 10;
    const b = 25;
    return a + b
} */

// const Sumar = (a, b) => /* return implicito */ a + b 

const Sumar = a => a + 20

/* const Sumar = function (a) {
    return a + 20
} */

console.log(Sumar(5))
//  Si no tengo parametros, coloco parentesis vacio
// Si tengo un return implicito, no me hace falta abrir llaves
// Si tiene mas de una instruccion tengo que abrir llaves
// Si tenemos un solo parametro, no hace falta escribir llaves en los parametros








/* function Sumar (num3, num1, num2) {
    return num3 + num1 + num2
}

console.log(Sumar(5, 6, 8))
console.log(Sumar(3, 3, 3)) */


/* function Saludar (nombre, edad, apellido) {
    return `Hola me llamo, ${nombre} ${apellido} y tengo ${edad} años de edad`
}

console.log(Saludar("Angel", 30, "Montaña"))

 */

/* const nombre = prompt("Ingrese su nombre")

function Saludar (name) {
    alert(`Hola ${name}`)
}

Saludar(nombre) */

