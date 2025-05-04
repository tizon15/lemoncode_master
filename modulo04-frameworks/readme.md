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

Despues ejecutaremos `npm start` para arrancar el servidor

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


## [Ejercicio 2-Vue](https://github.com/tizon15/lemoncode_master/tree/master/modulo04-frameworks/Ejercicio2-Vue)

Este ejercicio esta compuesto por un fichero HTML, un fichero Typescript y una hoja de estilos en CSS, a partir de ello, se ha completado el ejercicio a partir del framework de **Nuxt** de Vue. 

Para poder visualizar este ejercicio después de descargarse el código, hay que abrir un terminal en la carpeta del ejercicio `C:\XXX\lemoncode_master\modulo04-frameworks\Ejercicio2-Vue`.

Ejecutaremos el comando `pnpm install o npm install` para descargar las dependencias del proyecto, esto nos generará una carpeta llamada `node_modules, .nuxt, .output`

Despues ejecutaremos `pnpm dev` para arrancar el servidor

Para el ejercicio 2 framework Vue hemos usado Nuxt como empaquetador y server, dentro de esta carpeta, después de haber ejecutado el comando anterior tendremos la siguiente estructura o similar.

    Ejercicio1
      |_ .nuxt
      |_ .output
      |_ components
         |_ TheNavigation.vue
         |_ ToDoForm.vue
         |_ ToDoList.vue
      |_ composables
         |_ useToDos.ts
      |_ layouts
         |_ default.vue
      |_ node_modules
      |_ pages
         index.vue
      |_ public
      |_ server
      |_ server
      |_ shared
         |_ types
            |_ index.ts   
      |_ .gitignore
      |_ app.vue
      |_ package.json
      |_ pnpm-lock.yaml
      |_ README.md
      |_ tsconfig.json

El ejercicio consiste en hacer un ToDo List, en este caso usando **Vue 3** y **Nuxt 3** y **Tailwind CSS** como framework de estilos

Para ello solo hemos usado la ruta Home, en el que por medio de un Layout añadimos el header y los componentes necesarios para el ejercicio
- Un input para añadir el ToDo, que al clickar en el botón de añadir, se añadirá a la lista de tareas pendientes
- Un checkbox para mostrar las tareas completadas o pendientes
- Un botón para eliminar todas las tareas completadas
- Un botón para marcar todas las tareas como completadas

Despues mostramos la lista de tareas, en el que podremos ver el nombre de la tarea
- Un checkbox para marcar la tarea como completada o no
- Un botón para eliminar la tarea de la lista
- Un botón para editar la tarea, que al clickar en el botón de editar, se pondrá el input con el nombre de la tarea, se quitará el checkbox para completarla
 y al clickar en el botón de guardar, se actualizará la tarea en la lista
- Un botón para cancelar la edicioón de la tarea, que al clickar se volvera a la vista normal de la tarea sin editar
Cuando la tarea esta completada, se pondra en un color diferente y el texto se pondra tachado
---


## [Ejercicio 3-Angular](https://github.com/tizon15/lemoncode_master/tree/master/modulo04-frameworks/Ejercicio3-Angular)

Este ejercicio esta compuesto por ficheros HTML, ficheros Typescript y estilos en SCSS, a partir de ello, se ha completado el ejercicio a partir del framework de **Angular** . 

Para poder visualizar este ejercicio después de descargarse el código, hay que abrir un terminal en la carpeta del ejercicio `C:\XXX\lemoncode_master\modulo04-frameworks\Ejercicio3-Angular`.

Ejecutaremos el comando `pnpm install o npm install` para descargar las dependencias del proyecto, esto nos generará una carpeta llamada `node_modules` y el fichero `pnpm-lock.yaml o package-lock.json`

Después usaremos el comando `pnpm start o npm start` para arrancar el servidor y poder ver nuestra página en `localhost:4200`

Para el ejercicio 3 framework Angular hemos usado el propio bundling de Angular como empaquetador y server, dentro de esta carpeta, después de haber ejecutado el comando anterior tendremos la siguiente estructura o similar.

    Ejercicio3
      |_ .angular
      |_ .node_modules
      |_ public
      |_ src
         |_app
            |_ components
               |_ about
               |_ crud
               |_ dashboard
               |_ galery
               |_ home
               |_ login
               |_ profile
            |_ guards
            |_ layout
               |_ footer
               |_ private-header
               |_ public-header
            |_ models
            |_ services  
            app.component.html
            app.component.scss
            app.component.ts
            app.config.ts
            app.router.ts
         index.html
         main.ts
         styles.scss
      |_ .gitignore
      |_ angular.json
      |_ package.json
      |_ pnpm-lock.yaml
      |_ README.md
      |_ tsconfig.app.json
      |_ tsconfig.json

El ejercicio consiste en hacer una página de login que, dependiendo de si el usuario ha iniciado sesión o no, muestra diferentes cosas.

### Inicio

Al comenzar, iremos a la URL proporcionada anteriormente:  
`localhost:4200`  
Al no estar registrados, nos llevará a la página **Home**.

#### Navegación en Home

En el menú de Home solo se muestran tres opciones:

- Home
- Login
- About

#### Acceso a páginas privadas

Como el ejercicio trata de un login con páginas privadas y públicas, si cambiamos la URL a  
`localhost:4200/dashboard`  
y no estamos registrados, automáticamente volveremos a la página **Login**.

Esto se debe al guard configurado en nuestras rutas, que impide acceder a páginas privadas sin haber iniciado sesión con las credenciales correctas.

#### Página de Login

En la página de Login, se muestran las credenciales necesarias para acceder a las páginas privadas:

- **Username:** `master@lemoncode.net`
- **Password:** `12345678`

El formulario de validación contiene dos campos: uno para el usuario y otro para la contraseña. El usuario debe tener formato de email, y se mostrará un mensaje si el formato es incorrecto. Además, si los campos están vacíos, el botón de **submit** permanecerá deshabilitado.

#### Comportamiento tras el login

Al enviar el formulario, gracias a un observable de **RxJS**, habrá un delay de 2 segundos para comprobar si las credenciales introducidas son correctas.

- **Si las credenciales son correctas:**  
  Se redirige automáticamente a la página **Dashboard** mediante el router y el menú de navegación cambia a:

  - Dashboard
  - Gallery
  - Users
  - Profile
  - Hello, master@lemoncode.net
  - Logout

  El footer también cambiará de Home a Dashboard.

- **Si las credenciales son incorrectas:**  
  Después de mostrar un loading spinner durante dos segundos, aparecerá el mensaje:  
  `Invalid credentials`

#### Objetivo principal

El objetivo principal de este ejercicio es registrar toda la información en el **localStorage** y utilizar las nuevas funcionalidades de Angular, como las **Signals**, para hacer la página reactiva. Se han empleado **effect**, **computed** y **signal** de Angular a lo largo del desarrollo.

---
