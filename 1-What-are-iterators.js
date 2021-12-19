// Iterator:
// An iterator is any object that implements the Iterator protocol by having a next() method that returns a value property and a done property.

function myIterator(start, finish) {
  let index = start;
  let count = 0;

  return {
    next() {
      let result;
      if (index < finish) {
        result = { value: index, done: false };
        index += 1;
        count++;
        return result;
      }

      return {
        value: count,
        done: true,
      };
    },
  };
}

const it = myIterator(0, 10);
let result = it.next();

while (!result.done) {
  console.log(result.value);
  result = it.next();
}
