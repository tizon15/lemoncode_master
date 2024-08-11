const firstPerson = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
// CLONE
function clone(source) {
  const clone = { ...source };
  return clone;
}
let thirdPerson = clone(firstPerson);
console.log('CLONE', thirdPerson);

// MERGE
let secondPerson = clone(firstPerson);
secondPerson = { ...secondPerson, age: 45, married: true };
secondPerson.name = 'Paula';
function merge(source, target) {
  const mergeObject = { ...target, ...source };
  return mergeObject;
}
console.log('MERGE', merge(thirdPerson, secondPerson));
