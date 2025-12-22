# Bienvenido al laboratorio del modulo 05 - Testing

En este laboratorio se tratan los enunciados del laboratorio propuesto en el módulo 5 Testing

Para ello he creado dos ramas en el repositorio, una para el trabajo obligatorio y otra para el trabajo opcional

Este Laboratorio está hecho con los frameworks principales **React, Vitest**

Para ello hay que abrir un terminal en una carpeta vacia y hacer **git clone https://github.com/tizon15/lemoncode_master.git**

Luego acceder por medio de la terminal a la carpeta que contiene los ejercicios usando el comando `cd .\lemoncode_master\modulo05-testing\`

Como podemos comprobar con `git branch` estamos en la rama `master`

Pero para la realizacion de este ejercicio vamos a usar la rama `feature/laboratorio-testing-obligatorio` y `feature/laboratorio-testing-opcional`

---

### Breve descripción de como ver los resultados

Para estos ejercicios se ha usado diferetes npm packages.json, dependiendo del de la rama del proyecto

Una vez descargado el código, situados en la terminal en la carpeta general, haremos un `git branch` para verificar que estamos en la rama **master**. Veremos que en verde aparece la rama actual, master, y luego dos ramas más. `feature/laboratorio-testing-obligatorio` y `feature/laboratorio-testing-opcional`

Si queremos accerder a la rama **feature/laboratorio-testing-obligatorio** , [tendremos que ver la pull request de la rama obligatorio](https://github.com/tizon15/lemoncode_master/pull/23) o descargarnos el proyecto y acceder a la carpeta **modulo05-testing** y hacer `git checkout feature/laboratorio-testing-obligatorio`

Si queremos accerder al **Ejercico Opcional** , [tendremos que ver la pull request de la rama opcional](https://github.com/tizon15/lemoncode_master/pull/24) o descargarnos el proyecto, acceder a la carpeta modulo05-testing y hacer git checkout feature/laboratorio-testing-opcional

Depende del ejercicio tendremos unos comandos para ejecutar por consola de manera diferente

---

## [Ejercicio 1 - Obligatorio](https://github.com/tizon15/lemoncode_master/tree/master/modulo05-testing) -> Branch feature/laboratorio-testing-obligatorio

Para este ejercicio se ha usado el booilerplate [05-testing/01-react/05-real-project/00-boilerplate](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/05-testing/01-react/05-real-project/00-boilerplate) proyecto proporcionado en el enunciado como referencia. Se ha añadido la libreria de user event `@testing-library/user-event`, en este caso al estar ya en nuestro **package.json** solo tendremos que hacer `npm install` para instalar las dependencias del proyecto

Una vez hecho eso. Para comprobar que los test pasan, ejecutaremos el comando `npm test`. Esto ejecutara todos los test del proyecto. En este caso hemos modificado y creado los test de estos ficheros

- `project.mapper.spec.ts`
- `confirmation-dialog.component.spec.tsx`
- `confirmation-dialog.hook.spec.ts`

Los cambios de estos ficheros se pueden visualizar en la [pull request](https://github.com/tizon15/lemoncode_master/pull/23)

---

## [Ejercicio 2 - Opcional](https://github.com/tizon15/lemoncode_master/tree/master/modulo05-testing) -> Branch feature/laboratorio-testing-opcional

Para este ejercicio se ha creado una rama a partir de la rama obligatorio `Branch feature/laboratorio-testing-obligatorio`. Se han seguido los pasos del enunciado para crear los diferentes tipos de test

Para poder visualizar los resultados de manera local. Primero hay que hacer un `git pull origin feature/laboratorio-testing-opcional` para obtener los cambios de la rama opcional .

Primero, se han creado los test de integración del componente `./src/common/components/spinner/spinner.component.tsx`. Estos se pueden utilizar para probar la funcionalidad del componente. Primero hay que instalar las dependencias del proyecto con `npm install` y luego ejecutar el comando `npm test` para comprobar que los test pasan.

Luego hemos creado el pipeline para poder ejecutar los test de manera continua cada vez que haya una pull request y se haga push al proyecto. Para ello hemos creado el archivo `ci.yml` en la carpeta `modulo05-testing/.github/workflows/`. Claro, con esta carpeta a nivel directorio, no ejecutará el fichero yml debido a la estructura del proyecto. Por ello se ha creado la carpeta `.github/workflows/` en la raiz del proyecto y creado el fichero `modulo05.ci.yml` en esta.

Luego se ha instalado la libreria de `Cypress` para la creacion de test de e2e. Se han creado los test sobre la scene login. Se ha creado la carpeta cypress con su configuracion y los test en la carpeta `cypress/e2e/`. Tambien hemos actualizado el script de `package.json` para ejecutar los test de e2e con `npm run cy:open` para abrir la interface de cypress y `"test:e2e:ci": "npm start -- -r start:e2e:ci","start:e2e:ci": "cypress run"` para arrancar la aplicacion vite y ejecutar los test de manera continua.

Una vez hecho esto, se ha creado el pipeline para poder ejecutar los test de manera continua cada vez que haya una pull request abierta y se haga push al proyecto. Esta accion se encuentra en el archivo `modulo05-testing/.github/workflows/cypress_ci.yml`. Y se ha actualizado el archivo `.github/workflows/modulo05.ci.yml` con el job de cypress para ejecutar los test de e2e.

Se han creado también los test e2e de las scene `employee-list` con la herramienta `Playwright`. Estos test se encuantran en el directorio `playwright/e2e/`. Se ha modificado el script de `package.json` para ejecutar los test de e2e `"test:e2e:pw": "playwright test --ui"`. Para arrancar la interfaz de playwright se ejecuta `npm run test:e2e:pw`
Con ello podremos ver la interfaz de playwright y ejecutar los test de manera continua.

Como ultimo hemos creado el pipeline en el mismo directorio `modulo05-testing/.github/workflows/playwright.yml` para ejecutar los test de e2e de manera continua cada vez que haya una pull request abierta y se haga push al proyecto. Como pasaba anteriormente, ese fichero por si solo, al no estar en la raiz no ejecutará el action. Por ello se ha actualizado el archivo `.github/workflows/modulo05.ci.yml` con el job de playwright para ejecutar los test de e2e.

Los cambios de estos ficheros se pueden visualizar en la [pull request](https://github.com/tizon15/lemoncode_master/pull/24)
