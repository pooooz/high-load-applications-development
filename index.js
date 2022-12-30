const arrayToTest = [];
const setToTest = new Set();

function getRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const benchmark = (functionToBenchmark, operationsCount) => {
  const start = Date.now();
  functionToBenchmark()
  const end = Date.now();
  console.log(`${functionToBenchmark.name}: ${end - start}ms`)
  console.log(`\tOperations count: ${operationsCount}ms`);
  console.log(`\tTime of one operation: ${(end - start) / operationsCount}ms`);
}

const randomIntegers = [];
for (let i = 0; i < 1_000_000; i++) {
  randomIntegers.push(getRandomIntegerInRange(1, 1_000_001));
}

/*
* Я прекрасно понимаю, что в данном коде будет тестироваться не только скорость операций из задания,
* но и скорость генерации случайного, числа, его округления, добавления единицы к итератору, сравнения с числом,
* просто будем считать, что время выполнения этих операций достаточно мало.
*/
const arrayInsertion = () => {
  for (let i = 0; i < 1_000_000; i++) {
    arrayToTest.push(getRandomIntegerInRange(1, 1_000_000));
  }
}

const arraySearch = () => {
  for (let i = 0; i < 1_000_000; i++) {
    arrayToTest.indexOf(getRandomIntegerInRange(1, 1_000_000));
  }
}

const arrayDeletion = () => {
  for (let i = 0; i < 1_000_000; i++) {
    delete arrayToTest[getRandomIntegerInRange(1, 1_000_000)];
  }
}

const setInsertion = () => {
  for (let i = 0; i < 1_000_000; i++) {
    setToTest.add(getRandomIntegerInRange(1, 1_000_000));
  }
}

const setSearch = () => {
  for (let i = 0; i < 1_000_000; i++) {
    setToTest.has(getRandomIntegerInRange(1, 1_000_000));
  }
}

const setDeletion = () => {
  for (let i = 0; i < 1_000_000; i++) {
    setToTest.delete(getRandomIntegerInRange(1, 1_000_000));
  }
}

benchmark(arrayInsertion, 1_000_000);
benchmark(arraySearch, 1_000_000);
benchmark(arrayDeletion, 1_000_000);
console.log('\n\n');
benchmark(setInsertion, 1_000_000);
benchmark(setSearch, 1_000_000);
benchmark(setDeletion, 1_000_000);


