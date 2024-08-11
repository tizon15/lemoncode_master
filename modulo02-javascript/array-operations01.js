const original = ['uno', 'dos', 'tres'];
// HEAD
// Cogemos por medio de una desestructuración el primer argumento del array
const head = ([first]) => first;
console.log('HEAD', head(original));

// TAIL
// Cogemos por medio de una desestructuración todos los argumentos menos el primero
const tail = ([_first, ...args]) => args;
console.log('TAIL', tail(original));

// INIT
// Cogemos por medio de un método del array prototype los dos primeros argumentos
const init = (array) => array.slice(0, -1);
console.log('INIT', init(original));

// LAST
// Cogemos el último argumento del array por medio de la posición cogiendo el length -1 como referencia
const last = (array) => array[array.length - 1];
console.log('LAST', last(original));
