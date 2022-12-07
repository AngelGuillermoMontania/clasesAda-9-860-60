/* repetir(valor, cantidad)

Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces

repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
repetir('html', 0) // []

 */

// retornar un array, con el parametro valor repetido lo que me indique en el parametro cantidad
// la idea seria hacer un bucle la cantidad de veces que me pasen en el parametro cantidad, y por cada uno ir agregando uno a un array nuevo

function repetir (valor, cantidad) {
//  0          1               2
//  ['a']    ['a', 'a']     ['a', 'a', 'a']
    let arrayNuevo = []
    for (let i = 0; i < cantidad; i++) {
        arrayNuevo.push(valor)
    }
    return arrayNuevo
}