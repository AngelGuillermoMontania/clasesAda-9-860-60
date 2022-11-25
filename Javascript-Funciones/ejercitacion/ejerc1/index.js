const num1 = prompt("Ingrese su primer num")
const num2 = prompt("Ingrese su segundo num")

function Sumar (a, b) {
    return `Su suma es ${Number(a) + Number(b)}`
}

console.log(Sumar(num1, num2))