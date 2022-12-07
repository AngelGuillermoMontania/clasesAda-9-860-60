/* obtenerIndice(valor, array)
Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.


obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1


*/
// recorrer el array, y comparar con el valor que me pase. Si es igual retornar el indice donde se encuentra y si no esta retornar -1

function obtenerIndice (valor, arr) {

    for (let indice = 0; indice < arr.length; indice++) {
        if(arr[indice] === valor) {
            return indice
        }
    }

    return -1
}