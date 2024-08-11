// HEAD
const original = ['uno', 'dos', 'tres'];
const test = ['A', 'B', 'C'];
const head = ([first]) => first;

// TAIL
const tail = ([_first, ...args]) => args;

// INIT
const init = (/* array */) => {}; // Implementation here.

// LAST
const last = (array) => array[array.length - 1]; // Implementation here.

console.log(head(original));
console.log(tail(original));

console.log(last(original));
