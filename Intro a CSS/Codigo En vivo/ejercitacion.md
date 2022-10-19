# Introducción a HTML

## Ejercicios


### 10 - Comentarios

`index.html` debe contener:

- un título `h1` que diga: `Un artículo increíble`.
- un párrafo `p` con `lorem ipsum`.
- un título `h2` que diga `Comentarios`.
- 5 comentarios, con lo siguiente:
  - un título `h3` con el handle de la usuario (por ejemplo **@adalovelace**).
  - un `span` que diga: `Publicado hace 14 minutos` (cambiar el tiempo).
  - un párrafo `p` con `lorem ipsum`.

---

### 11 - Productos

`index.html` debe contener:

- un título `h1` que diga: `Mi tienda`.
- un título `h2` que diga: `Productos más comprados`.
- 5 productos, que contengan:
  - una imagen del producto (usar rutas absolutas).
  - un título `h3` con el nombre del producto.
  - al menos 3 elementos en línea `span` con distintas variaciones de producto. Por ejemplo, colores, tamaños, modelo, etc. Si se elige color, sería un `span` para cada color (rojo, verde, azul, etc). 
  - un párrafo `p` con el precio del producto.
  - un párrafo con un `lorem impsum`  corto

---

### 12 - Películas

Usando [IMDb](https://www.imdb.com/) como referencia, crear los siguientes archivos:

#### `index.html`

- un título `h1` que diga: `Bienvenida a Mis Películas`.
- una lista desordenada con links a las demás páginas (`Populares`, `Top 3`, `Con más recaudación`).

#### `populares.html`
- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` que diga: `Películas populares`.
- un párrafo `p` que diga: `Las películas más exitosas en los últimos tiempos`.
- un título `h2` que diga: `Películas`.
- 3 películas (+).

#### `top-3.html`
- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` que diga: `Top 3`.
- un párrafo `p` que diga: `Las películas más exitosas de todos los tiempos`.
- un título `h2` que diga: `Películas`.
- 3 películas (+).

#### `mas-recaudacion.html`

- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` que diga: `Películas con más recaudación`.
- un párrafo `p` que diga: `Las películas que más entradas vendieron en los últimos 50 años`.
- un título `h2` que diga: `Películas`.
- 3 películas (+).

(+) Cada película debe tener:

- una imagen del poster de la película (usar rutas absolutas).
- un título `h3` con el nombre de la película.
- un párrafo `p` con la fecha de estreno.

---

### 13 - Canciones

#### `index.html`

- un título `h1` que diga: `Mis canciones preferidas`.
- 3 canciones, que consisten en:
  - la imagen del poster del álbum de la canción (usar rutas relativas).
  - un título `h2` con el nombre de la canción
  - un elemento `p` con el nombre de la banda / artista.
  - los 3 elementos anteriores (imagen, título, y banda/artista) deben estar anidados dentro de un único link que lleve a la página de la canción.
  
#### `cancion.html`

- un link que diga `Volver atrás` y que te lleve a `index.html`.
- un título `h1` con el nombre de la canción
- un elemento en línea `span` con el nombre de la banda / artista.
- un elemento en línea `span` con el nombre del álbum.
- un elemento en línea `span` con el año de publicación del álbum.
- una título `h2` que diga: `Letra`
- párrafos `p` para la letra de la canción.

El archivo no tiene que llamarse `cancion.html` sino el nombre de la canción, por ejemplo: `africa.html`

---

### 14 - Artículo completo

A partir de lo visto ejercicios anteriores, crear en un `index.html` un artículo de blog que tenga:

- Una lista de contenido que lleve a cada sección
- Al menos 3 secciones
- Al menos 3 imágenes
- Una lista desordenada
- Una lista ordenada
- Una sección de comentarios, con al menos 3 comentarios