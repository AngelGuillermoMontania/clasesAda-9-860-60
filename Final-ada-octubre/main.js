/* 
    Atrapar contain-cards, botones de paginas, botones de filtros

    Cuando termine de cargar el html y el css, hacer el fetch para traer la informacion

    Una vez tenga la informacion, recorrer la info y pintar o dibujar las cards




    Darle funcionalidad a los botones de pagina, para ello:
        Deberia manejar el offset de la peticion
        Pintar nuevamente las cards

    Si le hago click a lastPage, cantidad de personajes o pokemones en 20



    Controlar entonces no exederme en pagina anterior y pagina siguiente

    La idea es que si el offset esta en 0 a previousPage, tenga la clase desactived

    Para los filtros, deberia tomar el array de pokemons y filter solo los que coincidan con algo
    Una vez tenga el nuevo array volver a pintar las cards


*/
/* 
const $containCards = document.querySelector(".contain-cards")

const $initPage = document.querySelector("#init-page")
const $previousPage = document.querySelector("#previous-page")
const $nextPage = document.querySelector("#next-page")
const $lastPage = document.querySelector("#last-page")

const $filterAll = document.querySelector("#filter-all")
const $filterGrass = document.querySelector("#filter-grass")
const $filterFire = document.querySelector("#filter-fire")
const $filterWater = document.querySelector("#filter-water")
const $filterNormal = document.querySelector("#filter-normal")


let allDetailPokemons;
let offset = 0;
let totalPokemons;


window.onload = async () => {

    load(0)
    
}

function load(OS) {

    if(offset < 20) {
        $previousPage.classList.add("desactived")
        $initPage.classList.add("desactived")
    } else {
        $previousPage.classList.remove("desactived")
        $initPage.classList.remove("desactived")
    }

    if(offset + 20 > totalPokemons) {
        $nextPage.classList.add("desactived")
        $lastPage.classList.add("desactived")
    } else {
        $nextPage.classList.remove("desactived")
        $lastPage.classList.remove("desactived")
    }


    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${OS}&limit=20`)
        .then(response => response.json())
        .then(data => {
            allDetailPokemons = data.results
            totalPokemons = data.count */
            
            /* Desde aqui hacia abajo, es exclusivo de POKEAPI */
           /*  let arrayPromises = [];
            allDetailPokemons.forEach(pokemon => {
                arrayPromises.push(fetch(pokemon.url))
            });
            Promise.all(arrayPromises)
                .then(info => {
                    allDetailPokemons = info;
                    Promise.all(allDetailPokemons.map(responsePokemon => responsePokemon.json()))
                        .then(data => {
                            allDetailPokemons = data
                            paintCards(allDetailPokemons)
                        })
                }) */
            /* De Aqui hacia arriba, es exclusivo de pokeApi */
  /*       })
        .catch(error => console.log(error))
} */
/* 
function paintCards (arrayToPaint) {
    $containCards.innerHTML = ""
    arrayToPaint.forEach(pokemon => {
        $containCards.innerHTML += `
        <div class="card">
            <img src="${pokemon.sprites.other.home.front_default}" class="img-pokemon">
            <div class="contain-info">
                <p>Name: ${pokemon.name}</p> 
                <p>Base Experience: ${pokemon.base_experience}</p> 
                <p>Hp: ${pokemon.stats[0].base_stat}</p> 
                <p>Atack: ${pokemon.stats[1].base_stat}</p> 
                <p>Defense: ${pokemon.stats[2].base_stat}</p> 
                <p>Speed: ${pokemon.stats[5].base_stat}</p> 
            </div>
        </div>
        `
    })
}

$nextPage.onclick = function () {
    if(offset + 20 < totalPokemons) {
        offset += 20
        load(offset)
    }
}

$previousPage.onclick = function () {
    if(offset > 0) {
        offset -= 20
        load(offset)
    }
}

$initPage.onclick = function() {
    offset = 0
    load(offset)
}

$lastPage.onclick = function() {
    while (offset + 20 < totalPokemons) {
        offset += 20
    }
    load(offset)
}


$filterFire.onclick = function () {
    let pokemonFilters = [];
    allDetailPokemons.forEach(pokemon => {
        pokemon.types.forEach(typePokemon => {
            if(typePokemon.type.name === "fire") {
                pokemonFilters.push(pokemon)
            }
        })
    })

    paintCards(pokemonFilters) */

    /* 
    let charactersFilters = allCharacters.filter(character => character.gender === "Male")


    let charactersFilters = [];
    allCharacters.forEach(character => {
        if(character.gender === "Male") {
            charactersFilters.push(character)
        }
    })
    
    */
/* 

}



$filterGrass.onclick = function () {
    let pokemonFilters = [];
    allDetailPokemons.forEach(pokemon => {
        pokemon.types.forEach(typePokemon => {
            if(typePokemon.type.name === "grass") {
                pokemonFilters.push(pokemon)
            }
        })
    })

    paintCards(pokemonFilters)

}

$filterWater.onclick = function () {
    let pokemonFilters = [];
    allDetailPokemons.forEach(pokemon => {
        pokemon.types.forEach(typePokemon => {
            if(typePokemon.type.name === "water") {
                pokemonFilters.push(pokemon)
            }
        })
    })

    paintCards(pokemonFilters)

}

$filterNormal.onclick = function () {
    let pokemonFilters = [];
    allDetailPokemons.forEach(pokemon => {
        pokemon.types.forEach(typePokemon => {
            if(typePokemon.type.name === "normal") {
                pokemonFilters.push(pokemon)
            }
        })
    })

    paintCards(pokemonFilters)

}

$filterAll.onclick = function () {

    paintCards(allDetailPokemons)

} */

const repetirLetras = (palabra, cantidad) => {
    let nuevaPalabra = "";
    for (let index = 0; index < palabra.length; index += 1) {
        const aux = palabra[index].repeat(cantidad);
        nuevaPalabra = nuevaPalabra + aux;
    }

    return nuevaPalabra;
} 

console.log(repetirLetras('hola', 2)) // 'hhoollaa'
console.log(repetirLetras('ada', 3)) // 'aaadddaaa'
console.log(repetirLetras('ah!', 5)) // 'aaaaahhhhh!!!!!'
console.log(repetirLetras('basta', 1)) // 'basta'