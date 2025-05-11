# Gameflix

**Gameflix** es una página web que imita la interfaz de Netflix, pero dedicada exclusivamente a videojuegos. En la parte superior se muestra un videojuego destacado, y más abajo se organizan varias filas horizontales con otros videojuegos clasificados por plataformas (por ejemplo: PC, PlayStation, Xbox, Nintendo, etc.).

## Características

- **Encabezado (Header)**: Sección fija en la parte superior con el nombre del sitio o navegación.
- **Sección destacada principal**:
  - Imagen de fondo representando un videojuego destacado.
  - Un contenedor a la izquierda en posición fija con el título, la descripción y la duración aproximada del juego, con estilo que resalte sobre el fondo.
- **Filas por plataformas**:
  - Varias filas horizontales que muestran miniaturas de videojuegos.
  - Cada miniatura contiene atributos personalizados (`data-`) con la información relevante del juego.
  - Al hacer clic en una miniatura, se actualiza automáticamente la sección destacada con los datos correspondientes.

## Tecnologías utilizadas

- **Bootstrap**: Utilizado para estructurar y diseñar la mayor parte del sitio.
- **CSS personalizado**: Aplicado solo cuando Bootstrap no ofrece la solución deseada.
- **jQuery**: Para manipulación dinámica del DOM y manejo de eventos.

## Diseño visual

El diseño está inspirado en la interfaz de Netflix.

## Funcionamiento

Cada videojuego está representado por un `div` con atributos `data-` que contienen su información:

```html
<div class="miniatura" data-titulo="The Legend of Zelda" data-descripcion="Una aventura épica en Hyrule" data-duracion="50 h">
  <!-- Imagen o contenido de la miniatura -->
</div>
