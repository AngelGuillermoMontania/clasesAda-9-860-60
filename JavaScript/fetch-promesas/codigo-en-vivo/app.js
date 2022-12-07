


function app () {
    const unicoDiv = document.querySelector("#primerDiv")

    fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            unicoDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.base_experience}</p>
                <img src=${data.sprites.other.home.front_default}>
            `
        })
        .catch(error => console.log(error))
}


window.onload = app()


// Estado cumplido
// Estado en que fallo
// Estado de finalizacion


// query
// parametro