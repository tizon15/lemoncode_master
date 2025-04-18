# Bienvenido al laboratorio del modulo 04 - Frameworks

En este laboratorio se tratan los enunciados del laboratorio propuesto en el módulo 4 Frameworks

Este Laboratorio está hecho con los frameworks principales **React, Vue, Angular**

Para ello hay que abrir un terminal en una carpeta vacia y hacer **git clone https://github.com/tizon15/lemoncode_master.git**

Luego acceder por medio de la terminal a la carpeta que contiene los ejercicios usando el comando `cd .\lemoncode_master\modulo04-frameworks\`

## Tecnologias

Para este laboratorio compuesto de 3 ejercicios dependiendo el framework. En los ejercicios se ha usado Typescript, Html, CSS y el uso del empaquetador de módulos Webpack para React, Vite para Angular y Vue, para la creación de los ejercicios, Nodejs versión 22.11.0 y Visual Studio Code como IDE.

---

### Breve descripción de como ver los resultados

Para estos ejercicios se ha usado diferetes npm packages.json, dependiendo del proyecto

Una vez descargado el código y situados en la terminal en la carpeta general veremos que hay dos carpetas dependiendo de cada ejercicio

Si queremos accerder al **Ejercico framework de React** , tendremos que hacer un `cd .\Ejercicio1-React\` 

Y si queremos acceder al **Ejercico framework de Vue** , tendremos que hacer un `cd .\Ejercicio2-Vue\` 

Depende del ejercicio tendremos unos comandos para ejecutar por consola de manera diferente

---

## [Ejercicio 1-React](https://github.com/tizon15/lemoncode_master/tree/master/modulo04-frameworks/Ejercicio1-React)

Este ejercicio esta compuesto por un fichero HTML, un fichero Typescript y una hoja de estilos en CSS, a partir de ello, se ha distribuido usando la arquitectura pods todo lo necesario. 

Para poder visualizar este ejercicio después de descargarse el código, hay que abrir un terminal en la carpeta del ejercicio `C:\XXX\lemoncode_master\modulo04-frameworks\Ejercicio1-React`.

Ejecutaremos el comando `npm install` para descargar las dependencias del proyecto, esto nos generará una carpeta llamada `node_modules`

Para el ejercicio 1 framework React hemos usado Webpack como emaquetador de módulos, dentro de esta carpeta, después de haber ejecutado el comando anterior tendremos la siguiente estructura.

    Ejercicio1
      |_ node_modules   
      |_ src
         |_ core
          |_ providers
          |_ routes
         |_ layout
         |_ pods
          |_ members
          |_ sitcoms
         |_ scenes
         |_ app.tsx
         |_ index.html
         |_ index.tsx
         |_ style.css
      |_ .babelrc
      |_ .gitignore
      |_ package-lock.json
      |_ package.json
      |_ tsconfig.json
      |_ webpack.config.js

Usando el paths en el tsconfig y los index.ts exportamos todos los imports necesarios con el alias **@/**

El ejercicio consiste en mostrar dos lista, en este caso usando una **Table** de **Material UI** y recogiendo los datos por medio de un fetch de la api de github y de la API de rick y morty

Al aparecer la lista, se podrá clicar en name del usuario que queramos ver con mas detalle y este nos redigirá a la vista detallada y centrada del usuario

Por medio de un header podremos acceder a las dos listas 

Las listas estan realidas con **Material UI**

La lista **Members** tiene las siguientes caracteristicas

Un input que de inicio viene con la palabra **lemoncode** para filtrar la lista, segun lo que pongamos en dicho input y clickemos en el boton de filtro, nos mostrará los miembros de dicha organización, 

Ejemplo de uso
- Cambiar la palabra a **apple** y ver como se muestran los usuarios de apple
Tambien podemos apreciar que viene con un paginador, en este caso mostrando solo los 5 primeros miembros de la organización, es editable a 10, 20 o mostrar todos

La lista **Sitcoms** es algo diferente a la de members. Tiene las mismas caracterisitcas y paginación, pero en cuando al input y el botón aquí esta la diferencia. En el input podemos apreciar que viene vacío pero con un placeholder. Ahora debido al uso del hook **Debounce** no hará falta usar el botón search, es decir, que a medida que vas poniendo las letras con un delay de 500 milisegundos. Esto hará que en cuanto pase dicho tiempo, se ejecute el fetch a la Api de Rick y Morty con la palabra proporcionada

En cualquiera de las listas podemos clickar sobre el nombre y nos llevará a la pagina de detalle en el que podremos apreciar mas detalles sobre el miembro o personaje seleccionado

---



