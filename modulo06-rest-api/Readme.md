# Bienvenido al laboratorio del modulo 06 - REST API

En este laboratorio se tratan los enunciados del laboratorio propuesto en el módulo 6 REST API

Para ello hay que abrir un terminal en una carpeta vacia y hacer **git clone https://github.com/tizon15/lemoncode_master.git**

Luego acceder por medio de la terminal a la carpeta que contiene los ejercicios usando el comando `cd .\lemoncode_master\modulo06-rest-api\`

## Tecnologias

Para este laboratorio compuesto de 2 ejercicios dos principales y uno extra opcional. Los ejercicios están basados en el boilerplate dado en el enunciado. Se han cambiado los nombres de las componentes y usado dos tipos diferentes de APIs. La API de Rick y Morty propuesta en el enunciado. Y el server ya creado en el boilerplate para el laboratorio. El boilerplate está generado con el framework React y el server con Hono. Todo estoy usando Nodejs versión 22.11.0 y Visual Studio Code como IDE.

---

### Breve descripción de como ver los resultados

Para estos ejercicios se ha usado diferetes npm packages.json, dependiendo del proyecto

Una vez descargado el código y situados en la terminal en la carpeta general veremos que hay dos carpetas dependiendo de cada ejercicio

Si queremos accerder al **Ejercicio1** , tendremos que hacer un `cd .\Ejercicio1\` 

Y si queremos acceder al **Ejercico2** , tendremos que hacer un `cd .\Ejercicio2\`

Y para acceder al **Ejercicio extra GraphQL**, tendremos que hacer un `cd .\Ejercicio_extra_graphql`

Depende del ejercicio tendremos unos comandos para ejecutar por consola de manera diferente

---

## [Ejercicio 1](https://github.com/tizon15/lemoncode_master/tree/master/modulo06-rest-api/Ejercicio1)

Este ejercicio esta compuesto a raiz del boilerplate proporcionado. Hemos eliminado la carpeta server, dado que el objetivo principal según el enunciado es llamar a la api de [Rick y Morty](https://rickandmortyapi.com/documentation/#rest)

Para poder visualizar este ejercicio después de descargarse el código, hay que abrir un terminal en la carpeta del ejercicio `C:\XXX\lemoncode_master\modulo06-rest-api\Ejercicio1`.

Ejecutaremos el comando `npm install` para descargar las dependencias del proyecto, esto nos generará una carpeta llamada `node_modules`

Despues ejecutaremos `npm start` para arrancar el servidor en la url local **http://localhost:8080**

Para en el Ejercicio 1 poder llamar a la api de Rick y Morty, he usado la libreria [***Fetch***](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) para realizar las llamadas a la API.

Para ello, hemos sustituido todos los nombres de los ficheros, components, modelos... Por character y character-collection

Al inicio se podrá visualizar la lista con los 19 primero personajes que recibimos de la API. Y con el **paginador** al final de la lista, abajo del todo, se podrán mostrar más paginas de la api. Visualizando así toda su colección

Si se hace click sobre el icono de visualización (el ojo) podremos ver detalladamente un character en concreto. La diferencia es que al cambiar la pantalla por medio del icono de visualización podremos ver una vista detallada del personaje sin poder editarlo, solo visualizar sus caracteristicas.

Si queremos volver a la lista, es decir, el home, hay un botón arriba a la izquierda que nos lleva de nuevo. O siempre se puede retroceder desde el navegador

En el botón **ADD CHARACTER** podremos ir a la página de creación de un nuevo personaje, *No funciona la creación dado que estamos llamando a la api de rick y morty*. Pero podemos visualizar que hay dos desplegables **Episodes** y **Location** que los recogemos de la API de Ricky y Morty

---

## [Ejercicio 2](https://github.com/tizon15/lemoncode_master/tree/master/modulo06-rest-api/Ejercicio2)

Este ejercicio esta compuesto a raiz del boilerplate proporcionado. En este caso usaremos el mockup server proporcionado en el boilerplate

Para poder visualizar este ejercicio después de descargarse el código, hay que abrir un terminal en la carpeta del ejercicio `C:\XXX\lemoncode_master\modulo06-rest-api\Ejercicio2`.

Ejecutaremos el comando `npm install` para descargar las dependencias del proyecto principal y un `npm run postinstall` para descargar las dependecias del mockup server, esto nos generará una carpeta llamada `node_modules`

Despues ejecutaremos `npm start` que arrancará tanto el servidor de la mockup API como el servidor para el front

Para el ejercicio 2 vamos a usar la libreria [***Axios***](https://axios-http.com/docs/intro) para realizar las llamadas a la API., para ver las dos versiones de llamadas a una rest api mencionadas en el enunciado.

Basado en la parte anterior. Al inicio se podrá visualizar la lista con los 5 primero personajes que recibimos del mockup API.

Si se hace click sobre el icono de visualización (el ojo) podremos ver detalladamente un character en concreto. La diferencia es que al cambiar la pantalla por medio del icono de visualización podremos ver una vista detallada del personaje sin poder editarlo, solo visualizar sus caracteristicas.

Si queremos volver a la lista, es decir, el home, hay un botón arriba a la izquierda que nos lleva de nuevo. O siempre se puede retroceder desde el navegador

En este caso hemos ocultado el botón **ADD CHARACTER** debido a que solo vamos a editar personajes existentes

Si se hace click sobre el icono de edicion (un lápiz) podremos ver al detalle el personaje, al igual que el caso anterior. Pero esta vez todo estará en modo edicion para poder visualizarlo y **editarlo**. Al darle a guardar automaticamente nos redigiremos a la lista principal y podremos visualizar los cambios, si son generales, desde la lista, si son mas detallados desde la pagina de cada personaje

---


## [Ejercicio Extra - GrapQL](https://github.com/tizon15/lemoncode_master/tree/master/modulo06-rest-api/Ejercicio_extra_graphql)

Este ejercicio esta compuesto a raiz del boilerplate proporcionado. Hemos eliminado la carpeta server, dado que el objetivo principal según el enunciado es llamar a la api de [Rick y Morty](https://rickandmortyapi.com/documentation/#graphql) con [GraphQl](https://graphql.org/learn/)

Para poder visualizar este ejercicio después de descargarse el código, hay que abrir un terminal en la carpeta del ejercicio `C:\XXX\lemoncode_master\modulo06-rest-api\Ejercicio_extra_graphql`.

Ejecutaremos el comando `npm install` para descargar las dependencias del proyecto, esto nos generará una carpeta llamada `node_modules`

Despues ejecutaremos `npm start` para arrancar el servidor en la url local **http://localhost:8080**

Para el ejercicio extra vamos a usar la libreria [***Axios***](https://axios-http.com/docs/intro) para realizar las llamadas a la API con GraphQl.

Al igual que en el ejercicio 1 al inicio se podrá visualizar la lista con los 20 primeros personajes que recibimos de la API. Y con el **paginador** al final de la lista, abajo del todo, se podrán mostrar más paginas de la api. Visualizando así toda su colección

Si se hace click sobre el icono de visualización (el ojo) podremos ver detalladamente un character en concreto. La diferencia es que al cambiar la pantalla por medio del icono de visualización podremos ver una vista detallada del personaje sin poder editarlo, solo visualizar sus caracteristicas.

Si queremos volver a la lista, es decir, el home, hay un botón arriba a la izquierda que nos lleva de nuevo. O siempre se puede retroceder desde el navegador

En este ejercicio,se ha implementado un TextField encima de la lista para poder buscar por nombre los personajes. Tiene un debounce de 5seg para que no haga tantas llamadas a la api de Rick y Morty y poder así buscar mas facilmente

---
