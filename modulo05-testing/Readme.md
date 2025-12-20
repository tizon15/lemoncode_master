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

Si queremos accerder a la rama **feature/laboratorio-testing-obligatorio** , [tendremos que ver la pull request de la rama obligatorio](TODO) o descargarnos el proyecto y acceder a la carpeta **modulo05-testing** y hacer `git checkout feature/laboratorio-testing-obligatorio`

Si queremos accerder al **Ejercico Opcional** , tendremos que ver la pull request de la rama opcional o descargarnos el proyecto, acceder a la carpeta modulo05-testing y hacer git checkout feature/laboratorio-testing-opcional

Depende del ejercicio tendremos unos comandos para ejecutar por consola de manera diferente

---

## [Ejercicio 1 - Obligatorio](https://github.com/tizon15/lemoncode_master/tree/master/modulo05-testing) -> Branch feature/laboratorio-testing-obligatorio

Para este ejercicio hemos usado el booilerplate [05-testing/01-react/05-real-project/00-boilerplate](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/05-testing/01-react/05-real-project/00-boilerplate) proyecto proporcionado en el enunciado. Hemos añadido la libreria de user event `@testing-library/user-event`, en este caso al estar ya en nuestro **package.json** solo tendremos que hacer `npm install` para instalar las dependencias del proyecto

Una vez hecho eso. Para comprobar que los test pasan, ejecutaremos el comando `npm test`. Esto ejecutara todos los test del proyecto. En este caso hemos modificado y creado los test de estos ficheros

- `project.mapper.spec.ts`
- `confirmation-dialog.component.spec.tsx`
- `confirmation-dialog.hook.spec.ts`

Los cambios de estos ficheros se pueden visualizar en la [pull request](TODO)

## [Ejercicio 2 - Opcional](https://github.com/tizon15/lemoncode_master/tree/master/modulo05-testing) -> Branch feature/laboratorio-testing-opcional
