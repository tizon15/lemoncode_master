# Bienvenido al laboratorio del modulo 03 - Bundling

En este laboratorio se tratan los enunciados del laboratorio propuesto en el módulo 3 Bundling

Este Laboratorio está hecho con la herramienta principal **Webpack**

Para ello hay que abrir un terminal en una carpeta vacia y hacer **git clone https://github.com/tizon15/lemoncode_master.git**

Luego acceder por medio de la terminal a la carpeta que contiene los ejercicios usando el comando `cd .\lemoncode_master\modulo03-bundling\`

## Tecnologias

Para este laboratorio compuesto de 2 ejercicios uno básico y otro opcional. En los ejercicios se ha usado Typescript, Html, Sasss y el uso del empaquetador de módulos Webpack para la creación de los ejercicios, Nodejs versión 20.15.1 y Visual Studio Code como IDE.

---

### Breve descripción de como ver los resultados

Para estos ejercicios se ha usado la dependencia webpack y webpack-dev-server para poder lanzar nuestros ficheros

Una vez descargado el código y situados en la terminal en la carpeta general veremos que hay dos carpetas dependiendo de cada ejercicio

Si queremos accerder al **Ejercicio Básico** , tendremos que hacer un `cd .\Ejercicio1\` 

Y si queremos acceder al **Ejercicio Opcional** , tendremos que hacer un `cd .\Ejercicio2\` 

Depende del ejercicio tendremos unos comandos para ejecutar por consola de manera diferente

---

## [Ejercicio 1](https://github.com/tizon15/lemoncode_master/tree/master/modulo03-bundling/Ejercicio1)

Este ejercicio esta compuesto por un fichero HTML, un fichero Typescript y una hoja de estilos en SASS

Para poder visualizar este ejercicio después de descargarse el código, hay que abrir un terminal en la carpeta del ejercicio `C:\XXX\lemoncode_master\modulo03-bundling\Ejercicio1`.

Ejecutaremos el comando `npm install` para descargar las dependencias del proyecto, esto nos generará una carpeta llamada `node_modules`

Para el ejercicio básico de bundling hemos usado Webpack como emaquetador de módulos, dentro de esta carpeta, después de haber ejecutado el comando anterior tendremos la siguiente estructura

    Ejercicio1
      |_ node_modules   
      |_ src
         |_ assets
         |_ index.html
         |_ index.ts
         |_ style.scss
      |_ .babelrc
      |_ package-lock.json
      |_ package.json
      |_ tsconfig.json
      |_ webpack.config.js

Este ejercicio es simple, se compone de un fichero HTML que contiene un titulo inicial con estilos creados en el fichero SASS y en el que el último párrafo está creado a través del fichero Typescript

La principal práctica del ejercicio es poder empaquetar nuestro proyecto para poder llevarlo a producción pero a la par, también queremos crear un servidor local para poder visualizar nuestro proyecto.
Por ello se usa la dependencia **webpack-dev-server** . Este paquete nos ayudará a levantar nuestra aplicación typescript en local pero depende de la configuración del fichero **webpack.config.js** para poder
empaquetar y procesar todos los ficheros de nuestro proyecto

Dentro de nuestro fichero **package.json** tenemos una serie de scripts que nos ayudarán a crear este proceso. Para levantar el servidor en nuestra consola CLI del cual debería apuntar a la carpeta correspondiente
al Ejercicio1, ejecutaremos el comando `npm start`. Este comando levantar'a nuestro proyecto en el puerto asignado en el fichero webpack, en este caso `localhost:8080`

Para poder generar nuestro empaquetado de módulos para producción usaremos el siguiente comando `npm run build`. Este comando primero mirará dentro de los ficheros ts que no haya ningún error y después nos generará una carpeta llamada **dist** que tendrá nuestro proyecto directo para llevar a producción


---

## [Ejercicio2](https://github.com/tizon15/lemoncode_master/tree/master/modulo03-bundling/Ejercicio2)

Este ejercicio es parecido al primero pero tiene un par de cambios. La primera y más reseñable es que en vez de empaquetar un HTML, empaquetaremos mediante Webpack un proyecto en React. Después otro cambio es la division de los webpack configs y por ende de los scripts necesarios por entorno dev o entorno producción. Y por ultimo añadido el plugin para medir cuanto ocupan nuestras librerias

Para poder visualizar este ejercicio después de descargarse el código, hay que abrir un terminal en la carpeta del ejercicio C:\XXX\lemoncode_master\modulo03-bundling\Ejercicio1.

Ejecutaremos el comando npm install para descargar las dependencias del proyecto, esto nos generará una carpeta llamada node_modules

Para el ejercicio básico de bundling hemos usado Webpack como emaquetador de módulos, dentro de esta carpeta, después de haber ejecutado el comando anterior tendremos la siguiente estructura

     Ejercicio2
       |_ node_modules   
       |_ src
         |_ assets
         |_ chartComponent.tsx
         |_ chartService.ts
         |_ index.html
         |_ index.tsx
         |_ style.scss
       |_ .babelrc
       |_ declaration.d.ts
       |_ dev.env
       |_ package-lock.json
       |_ package.json
       |_ prod.env
       |_ tsconfig.json
       |_ webpack.common.js
       |_ webpack.dev.js
       |_ webpack.perf.js
       |_ webpack.prod.js

Una vez tenemos esta estructura tenemos varios scripts para poder verificar que todo el empaquetado funciona

Lo principal seria poder ver que nuestro proyecto se ve bien usando un servidor local con webpack-dev-server como en el ejercicio anterior, pero con la peculiaridad que en este caso podemos decidir que entorno queremos arraancar, si development o producción por ello usaremos para dev el siguiente comando `npm run start:dev` y para producción `npm run start:prod` 

Estos comando podremos verificar por la consola del navegador que tenemos una configuración de puerto de la API diferente, dependiendo si es dev o prod

Para empaquetar que versión queremos poner en nuestro servidor, ya sea development o producción tenemos los siguientes comandos `npm run build:dev` y `npm run build:prod` que nos generará una carpeta **dist** con el proyecto empaquetado

A parte de esto también dentro de nuestro `package.json` tenemos un script que nos abrirá una página y nos generará en nuestra carpeta **dist** los paquetes de librerias, a parte de nuestro código, que tiene nuestro proyecto. Con ello podemos ver que librerias son las que más ocupan y ver cuanta como de grande es nuestro proyecto, a la par de ver si sobran paquetes innecesarios



