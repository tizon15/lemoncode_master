// HEAD
const original = ['uno', 'dos', 'tres'];
const test = ['A', 'B', 'C'];
const head = ([first]) => first;

// TAIL
const tail = ([_first, ...args]) => args;

// INIT
const init = (array) => array.slice(0, -1);

// LAST
const last = (array) => array[array.length - 1]; // Implementation here.

console.log('HEAD', head(original));
console.log('TAIL', tail(original));
console.log('INIT', init(original));

console.log('LAST', last(original));
