/* sumarImparesHasta(numero)`

Crear una función `sumarImparesHasta` que tome como argumento un número `numero` y que devuelva la suma de todos los impares empezando desde 0 hasta dicho `numero` inclusive.

```javascript
sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576


*/

// sumar solo los numeros if (si) % 2 === 1, empiezo desde 0 hasta el numero que me pase como parametro

function sumarImparesHasta (numero) {
    //10, 
    let count = 0 // 3, 8, 15, 24

    for (let i = 1; i <= numero; i++) {
        if(i % 2 === 1) {
            count = count + i
        }
    }

    

    return count

}