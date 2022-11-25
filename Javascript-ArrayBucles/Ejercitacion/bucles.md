# 🔄 Estructuras de control: bucles

## Funciones

### `obtenerIndice(valor, array)`

Crear una función `obtenerIndice` que tome como argumento un valor cualquiera `valor` y un array cualquiera `array` y devuelva el índice del _primer ítem_ con dicho valor en el array, o -1 si no hay ninguno.

```javascript
obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1
```

### `repetir(valor, cantidad)`

Crear una función `repetir` que tome como argumento un valor `valor` y un número entero `cantidad`, y devuelva una array con `valor` repetido `cantidad` de veces.

```javascript
repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
repetir('html', 0) // []
```

### `sumarImparesHasta(numero)`

Crear una función `sumarImparesHasta` que tome como argumento un número `numero` y que devuelva la suma de todos los impares empezando desde 0 hasta dicho `numero` inclusive.

```javascript
sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576
```

### `crearCuentaRegresiva(numeroInicial)`

Crear una función `crearCuentaRegresiva` que tome como argumento un número entero `numeroInicial` y que devuelva un array con cuyo primer ítem sea `numeroInicial` y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

```javascript
crearCuentaRegresiva(3) // [3, 2, 1, 0]
crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]
```

### `invertir(array)`

Crear una función `invertir` que tome como argumento un array `array` y que devuelva un array con los mismos valores pero en orden invertido.

```javascript
invertir([1, 2, 3]) // [3, 2, 1]
invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]
```

### `repetirLetras(palabra, cantidad)`

Crear una función `repetirLetras` que tome como argumento un string `palabra` y un número entero `cantidad`, y devuelva una string donde cada letra de `palabra` esté repetida `cantidad` de veces.

```javascript
repetirLetras('hola', 2) // 'hhoollaa'
repetirLetras('ada', 3) // 'aaadddaaa'
repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
repetirLetras('basta', 1) // 'basta'
```

### `esPalindromo(palabra)`

Crear una función `esPalindromo` que tenga como par´ámetro un string `palabra` y devuelva `true` si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda, o `false` sino.

```javascript
esPalindromo('ada') // true
esPalindromo('reconocer') // true
esPalindromo('mama') // false
esPalindromo('javascript') // false
```

**BONUS:** hacer que funcione con oraciones y no con palabras. [Ejemplos](https://es.wikipedia.org/wiki/Pal%C3%ADndromo#Ejemplos).

## Programas

Los siguientes ejercicios se realizan usando:

- `prompt` para pedir ingresar datos
- `confirm` para pedir por sí o por no (opción binaria)
- `alert` para mostrar información

Crear un archivo de `.js` para cada ejercicio.

Ejemplo de consigna:

Crear un programa que pida ingresar un nombre, pregunta si el nombre es correcto, y si lo es, muestre un mensaje saludando a la persona con dicho nombre.

```javascript
const nombre = prompt('Por favor, ingresá tu nombre')
const respuesta = confirm('¿Estás segura que te llamás así?')
if (respuesta) {
  alert(`¡Hola ${nombre}!`)
}
```

## Ejercicios con bucle `for`

### 🔢 Números impares

Crear un programa que muestre en consola los números impares entre el 0 y el 20

### 📀 Playlist

Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

### ❗️ Factorial

Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 _ 3 _ 2 \* 1 = 24

### ✊🤚✌️ Piedra, papel, tijera II

Al ejercicio de **Piedra, papel, tijera** de _condicionales_, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y rondas restantes. Al finalizar se debe indicar quién ganó. Ejemplo:

```
Ronda: 2 de 5
🙍‍♀️ Jugadora: Piedra
👾 Computadora: Tijera
Jugadora ha ganado esta ronda 🎉
Puntaje: 2 (Jugadora) - 0 (Computadora)
```

<br>

## Ejercicios con bucle `while`

### 🔐 Múltiples intentos

Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

### 🤔 Adivinar palabra

Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.

### 🧨 Explosión

Crear un programa que permita ingresar una serie de números separados por espacio. El programa debe disminuyendo cada número en 1 por ronda e ir mostrando el resultado (en consola, o en un string concatenado) hasta que todos lleguen a 0 (cuando lleguen a no deben seguir disminuyendo) y se produzca la explosión. Ejemplo

```
⏱ 3 1 0 2
⏱ 2 0 0 1
⏱ 1 0 0 0
💥💥💥💥💥
```

### 🏝 Isla desierta

- Crear un programa que permita mover un barco hacia una isla. El programa debe permitir ingresar los valores AVANZAR o RETROCEDER, siendo que AVANZAR acerca el barco un espacio hacia la isla y RETROCEDER lo aleja. El programa debe terminar cuando el barco llega a la isla. Ejemplo:

```
⛵️🌊🌊🌊🏝
// AVANZAR
🌊⛵️🌊🌊🏝
// AVANZAR
🌊🌊⛵️🌊🏝
// RETROCEDER
🌊⛵️🌊🌊🏝
// AVANZAR
🌊🌊⛵️🌊🏝
// AVANZAR
🌊🌊🌊⛵️🏝
¡Has llegado a la isla!
```

**📝 Lista de tareas**

- Crear un programa que tenga un menú con las siguientes opciones:
  - **AGREGAR TAREA:** debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
  - **MODIFICAR TAREA:** debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
  - **ELIMINAR TAREA:** debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
  - **VER TAREAS:** debe listar todas las tareas hasta el momento
  - **SALIR:** debe terminar la ejecución del programa
- El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones.