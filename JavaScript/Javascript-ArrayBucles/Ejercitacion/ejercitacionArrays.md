# Estructuras de datos: Arrays

## Ejercicios

Todo ejercicio que incluya emojis puede ser sustituido con strings

### `obtenerMenor(numeros)`

Crear una función `obtenerMenor` que tome como argumento un array de números `numeros` y devuelva el menor de ellos. Ejemplo:

```javascript
obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12]) // 2
```

### `sumar(numeros)`

Crear una función `sumar` que tome como argumento un array de números `numeros` y devuelva la suma de ellos. Ejemplo:

```javascript
sumarNumeros([5, 7, 10, 12, 24]) // 58
```

### `contiene(numero, numeros)`

Crear una funci´ón `contiene` que tome como argumentos un número `numero` y un array de números `numeros` y devuelva `true` o `false` dependiendo de si dicho `numero` se encuentra en el array de `numeros`. Ejemplo:

```javascript
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
```

### `invertirCaso(string)`

Crear una función `invertirCaso` que tome como argumento un string `string` y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

```javascript
invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'
```

### `estanJuntos(personajes)`

Crear una función `estanJuntos` que tome como argumento un array de strings `personajes`, y devuelva `true` si Sam se encuentra al lado de Frodo, ya sea antes o después, o `false` sino. Ejemplo:

```javascript
estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
estanJuntos(['Sam', 'Orco', 'Frodo']) //true
```

### `germinar(plantines)`

Crear una función `germinar` que tome como argumento un string de `plantines` con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

```javascript
germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱') // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'
```


### `multiplicar(multiplicador, numeros)`

Crear una función `multiplicar` que tome como argumentos un número `multiplicador` y un array de números `numeros`, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

```javascript
multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
multiplicar(10, [2, 5, 77]) // [20, 50, 770]
```

### `sonIguales(a, b)`

Crear una función `sonIguales(a, b)` que tome como argumentos dos arrays `a` y `b` y devuelva `true` si ambos arrays tienen los mismos valores en la misma posición, o `false` sino.

```javascript
sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) // true
sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]) // false
sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) // false
```

### `jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)`

Crear una función `jugarPiedraPapelTijeras` que tome como argumentos dos strings `jugadoraA` y `jugadoraB` con los nombres de cada jugadora respectivamente, y dos arrays de strings `jugadasA` y `jugadasB` con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o `Empate` en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

```javascript
const jugadasA = ['piedra', 'piedra', 'tijera']
const jugadasB = ['papel', 'tijera', 'tijera']
// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate
// Resultado final: Empate
```

```javascript
jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) // Grace
jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) // Empate
jugarPiedraPapelTijeras(
  'Ada',
  'Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']
) // Ada
```