# Funciones

## Ejercicios

### `sumar(a, b)`

Crear una función `sumar` que tome como argumentos dos números y devuelva la suma de ellos

```javascript
sumar(2, 3) // 5
sumar(1.2, 3.4) // 4.6
sumar(3, -5) // -2
```

### `restar(a, b)`

Crear una función `restar` que tome como argumentos dos números y devuelva la resta de ellos

```javascript
restar(3, 2) // 1
restar(10, 5.5) // 4.5
restar(3, 5) // -2
```

### `multiplicar(a, b)`

Crear una función `multiplicar` que tome como argumentos dos números y devuelva la multiplicación de ellos

```javascript
multiplicar(2, 3) // 6
multiplicar(4, 0.5) // 2
```

### `dividir(a, b)`

Crear una función `dividir` que tome como argumentos dos números y devuelva la suma de ellos

```javascript
dividir(12, 3) // 4
dividir(8, 4) // 2
sumar(30, 6) // 5
```

### `esPar(numero)`

Crear una función `esPar` que tome como argumento un número y devuelva `true` si dicho números es par o `false` si no lo es

**TIP**: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

```javascript
esPar(2) // true
esPar(3) // false
```

### `esImpar(numero)`

Crear una función `esImpar` que tome como argumento un número y devuelva `true` si dicho números es impar o `false` si no lo es

**TIP**: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

```javascript
esImpar(2) // false
esImpar(3) // true
```

### `gritar(str)` 

Crear una función `gritar` que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

```javascript
gritar('hola') // ¡hola!
gritar('aaaaaa') // ¡aaaaaa!
```

### `obtenerNombreCompleto(nombre, apellido)`

Crear una función `obtenerNombreCompleto` que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

```javascript
obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'
```

### `saludar(nombre)`

Crear una función `saludar` que tome como argumentos un nombre y devuelva un saludo que lo incluya.

```javascript
saludar('Ada') // 'Hola Ada, un gusto conocerte'
```

### `saludarGritando(nombre, apellido)`

Usando las funciones anteriores (`obtenerNombreCompleto`, `saludar` y `gritar`), crear una función `saludarGritando` que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

```javascript
saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
```

**TIP:** recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante

```javascript
const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
const saludo = saludar(nombreCompleto)
const grito = gritar(saludo)
console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!
```

### `generarEmail(usuario, dominio)`

Crear una función `generarEmail` que tome como argumentos dos string `usuario` y `dominio` y el un string email con el formato `usuario@dominio.com`

```javascript
generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'
```

### `esMayorDeEdad(edad)`

Crear una función `esMayorDeEdad` que tome como argumento un número `edad` y devuelva `true` si es mayor de edad (18 o más) o `false` de lo contrario

```javascript
esMayorDeEdad(15) // false
esMayorDeEdad(18) // true
esMayorDeEdad(27) // true
```

### `haceCalor(temperatura)`

Crear una función `haceCalor` que tome como argumento un número `temperatura` y devuelva `true` si hace calor (22 grados o más) o `false` de lo contrario

```javascript
haceCalor(12) // false
haceCalor(22) // true
haceCalor(32) // true
```

### `aceptaDeposito(monto)`

Crear una función `aceptaDeposito` que tome como argumento un número `monto` y devuelva `true` si el `monto` es divisible por 10 o `false` si no lo es

```javascript
aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true
```