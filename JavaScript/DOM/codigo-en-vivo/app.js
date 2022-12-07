/* DOM - Document Object Model */
/* 
const h1 = document.getElementById("titulo") // Devuelve un solo elemento, y el primero
const p = document.getElementsByTagName("p") // Devuelve un array con todas las etiquetas que coinciden
const parrafo = document.getElementsByClassName("parrafo") // Devuelve un array con la clase que coincida
 */
/* 
const p = document.querySelectorAll(".parrafo") // Devuelve un array
const h1 = document.querySelectorAll("#titulo") // Devuelve un array
 */
/* 
const parrafo = document.querySelectorAll(".parrafo") // Atrapa un array con clase parrafo
const h1 = document.querySelector("#titulo") // Atrapa un solo id
const p = document.querySelectorAll("p") // atrapa un array con etiquetas p
 */

const container = document.querySelector(".container")
/* const h1 = document.querySelector("#titulo") */
const body = document.querySelector("body")

/* container.innerText = "<h1>Titulo<h1>"; */  //Solo agrega texto literal
/* container.innerHTML = "<h1>Titulo</h1>" */   //Puedo agregar HTML

/* h1.style.color = "#AA2255"
h1.style.fontSize = "150px" */


const imagenes = ["./Group 3.png", "./Group 4.png"]
// Deberia recorrer el array, agregarlos al div container, una vezz agregado luego querria por ejemplo cambiar su tamaño



/* body.classList.toggle("black")
body.classList.toggle("white") */
/* 
window.addEventListener("load", () => {

    for (let i = 0; i < imagenes.length; i++) {
        container.innerHTML += `
            <img src="./${imagenes[i]}"></img>`
    }
})
 */

const button = document.querySelector("#button")
/* 
button.addEventListener("click", () => {
    body.classList.toggle("black")
    body.classList.toggle("white")
}) */

// 1, 2, 3, 4, 5

button.onclick = (event) => {
    console.log(event)
    body.classList.toggle("black")
    body.classList.toggle("white")
}