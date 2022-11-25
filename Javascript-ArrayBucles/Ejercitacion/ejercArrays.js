// Ejerc 1


// FORMA 1
/* let esMenor = 150
// 5
// [5, 7, 99, 34, 54, 2, 12]
function obtenerMenor (arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < esMenor) {
            esMenor = arr[i]
        }
    }
    return esMenor
}

console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12])) */




// FORMA 2
/* function obtenerMenor (arr) {
    let aux = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < aux) {
            aux = arr[i]
        }
    }
    return aux
}

console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12])) */