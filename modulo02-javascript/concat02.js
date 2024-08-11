// Concat

const num = [1, 2, 3, 4];
const chars = ['A', 'B', 'C', 'D'];
const concat = (a, b) => [...a, ...b];

// OPCIONAL
let copy = [];
const concat_op = (...args) => {
  args.forEach((element) => {
    copy = [...copy, ...element];
  });
  return copy;
};

console.log('CONCAT', concat(num, chars));
console.log('CONCAT EXTRA', concat_op(num, chars, [true]));
