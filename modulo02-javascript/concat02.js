// Concat

const num = [1, 2, 3, 4];
const chars = ['A', 'B', 'C', 'D'];
// Concatenamos los dos arrays por medio del operador spread
const concat = (a, b) => [...a, ...b];
console.log('CONCAT', concat(num, chars));

// OPCIONAL
let copy = [];
// acemos un concat pero con todos los arrays que queramos pasar como parámetros
const concat_op = (...args) => {
  args.forEach((element) => {
    copy = [...copy, ...element];
  });
  return copy;
};

console.log('CONCAT EXTRA', concat_op(num, chars, [true]));
