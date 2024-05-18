# 50Proyects50Days
Desafio de 50 proyectos en 50 dias

## Descripcio - 💻
Estoy realizado este proyecto a modo de practica, para mejorar mis conocimietnos en **HTML, CSS** y **JAVASCRIPT.**  
A medida que valla terminando cada proyecto ire agregandolos a este repositorio.  
Finalmente diseñare una interface para poder visualizar cada proyecto de una manera mas comoda y sencilla.  

Mis objetivos:
1. Diseñar mi propia interface para vizualizar los mini proyectos a medida que son agregados.
2. Adjuntar todos los proyectos.
3. Intentar mejorar la vercion original de cada proyecto.
4. Solo valerme de la ayuda visual de la demo de cada proyecto, sin depender del codigo.
5. Recopilar todo lo aprendido con este desafio.

## ¿Que he apredi hasta ahora? - 💡

1- incercion de imagenes en las etiqueta style de html
  ```html
  <div  
  	class="card active"  
  	style="background-image: url('https://unsplash.com/photos/j_gnGCDQRew/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE1Mjc4OTk0fA&force=true')">
  </div>
  ```    

2- El origen de donde comienza la tranformacion
  ```css
  transform-origin: top left;
  ```   

3- Separar una palabra por letras de una manera mas sencilla 
  ```js
  .split('')
  .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
  .join('')
  ```

4- Mejorar mi entedimiento sobre las animaciones 
  ```css
  transition: transform 0.5s linear;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  ```

5-  Uso de pseudo-clases que seleccionan solo los elementos con números pares
 ```js
  .scroll-card:nth-of-type(even) {
    transform: translateX(400%);
  }
  ```
