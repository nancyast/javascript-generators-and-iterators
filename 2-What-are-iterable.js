// An object that allows iteration of itself.
// An array is a build-in iterable
// There are other built-in iterables (string, maps, sets)
// Iterables implement the @@iterator method
// Symbol.iterator a well-known symbol in javascript

const arr = [0, 2, 4, 5];
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const map = new Map();
map.set('key1', 'value 1');
map.set('key2', 'value 2');
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);

for (const [key, value] of map) {
  console.log(`${key} and ${value}`);
}
