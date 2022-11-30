const list = [1, 15, 3, 87, 45, 99, 38, 73]
// Filter
const arrayFiltrado = list.filter(function (num) {
    return num > 30  // El filter en el return de la funcion tiene que dar true o false, tiene que ser anonima
})


const arrayFiltradoConFlecha = list.filter(num => num > 30)


//  1   ---->  1 > 50  ---> false     Entonces no guarda este num en el nuevo array 
// Asi con cada uno
// Va a llegar al 87  y num va a tomar el valor de 87 ----> 87 > 50 ---> true entonces guarda en un nuevo array
/* 
console.log(arrayFiltrado) */








// const list = [1, 15, 3, 87, 45, 99, 38, 73]
const nombres = ["Ada", "Angel", "Carla", "Claudia"]
// Recibe un CallBack (Funcion anonima)
const arrayMapeado = list.map(function (num) {
    return num + 20
})

const saludarATodos = nombres.map(cadaNombre => "Hola " + cadaNombre)

/* console.log(saludarATodos)
console.log(nombres) */











let listaOrdenada = []


for (let i = 0; i < list.length; i++) {
    if(list[i] < list[i + 1]) {
        listaOrdenada.unshift(list[i])
    } else if (list[i] > list[i - 1]) {
        listaOrdenada.push(list[i])
    } else {
        listaOrdenada.push(list[i])
    }
}







/* OBJETOS */

const persona = {
    nombre: "Ada",
    apellido: "Lovelace",
    edad: 40,
    profesion: ["Programadora", "Matematica"],
    vive: false,
    saludar: function () {
        return "Hola, soy " + persona.nombre + " " + persona.apellido
    }
}

const persona2 = {
    nombre: "Angel",
    apellido: "Montania",
    edad: 30,
    profesion: ["Programador"],
    vive: true,
    saludar: function () {
        return "Hola, soy " + persona2.nombre + " " + persona2.apellido
    }
}

const pokemon = {
    nombre: "pikachu"
}

/* console.log(persona.saludar())
console.log(persona2.saludar()) */

pokemon.ataque = 72;
/* console.log(pokemon.ataque) */


/* for (const key in pokemon) {
    console.log(key, pokemon[key])
}
 */










const personas = [
    {
        nombre: "Ada",
        apellido: "Lovelace",
        edad: 40,
        profesion: ["Programadora", "Matematica"],
        vive: false,
    }, {
        nombre: "Angel",
        apellido: "Montania",
        edad: 30,
        profesion: ["Programador"],
        vive: true,
    },
    {
        nombre: "Claudia",
        apellido: "Montania",
        edad: 30,
        profesion: ["Programadora"],
        vive: true,
    },
    {
        nombre: "Angel",
        apellido: "Montania",
        edad: 30,
        profesion: ["Programador"],
        vive: true,
    },
    {
        nombre: "Angel",
        apellido: "Montania",
        edad: 30,
        profesion: ["Programador"],
        vive: true,
    },
    {
        nombre: "Angel",
        apellido: "Montania",
        edad: 30,
        profesion: ["Programador"],
        vive: true,
    },
    {
        nombre: "Angel",
        apellido: "Montania",
        edad: 30,
        profesion: ["Programador"],
        vive: true,
    },
    {
        nombre: "Angel",
        apellido: "Montania",
        edad: 30,
        profesion: ["Programador"],
        vive: true,
    }
]

const personasJSON = JSON.stringify(personas)

console.log(personasJSON)

const personasJS = JSON.parse(personasJSON)

console.log(personasJS)