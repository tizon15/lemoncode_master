// Creamos la primera persona
const firstPerson = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
// CLONE
/**
 * Funcion que mediante le operador Spread copiamos el contenido de la persona que teniamos creada y lo retornamos
 * @param {*} source
 * @returns
 */
function clone(source) {
  return { ...source };
}
// creación del clon
const thirdPerson = clone(firstPerson);
console.log('CLONE', thirdPerson);

// MERGE
// Clonamos a la primera persona para hacer una segunda
let secondPerson = clone(firstPerson);
// Añadimos un par de parametros a la copia
secondPerson = { ...secondPerson, age: 45, married: true };
// Cambiamos el nombre de la segunda persona
secondPerson.name = 'Paula';
/**
 *  Método en el que unimos los dos parámetros source y target, y unsando el operador Spread
 *  primero añadimos el target y luego el source, así si hay alguna propiedad en común sobreescribimos la del source
 * @param {*} source
 * @param {*} target
 * @returns
 */
function merge(source, target) {
  const mergeObject = { ...target, ...source };
  return mergeObject;
}
console.log('MERGE', merge(thirdPerson, secondPerson));
