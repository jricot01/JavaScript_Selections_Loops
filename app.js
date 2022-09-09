console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (i = 0; i <= 100; i++)
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i, "odd");
  }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    // FIZZBUZZ
    console.log(i, "FIZZBUZZ");
  } else if (i % 3 == 0) {
    // FIZZ
    console.log(i, "FIZZ");
  } else if (i % 5 == 0) {
    //BUZZ
    console.log(i, "BUZZ");
  }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let num = 0; num <= n; num++) {
  if (num == value) {
    console.log("Found Value");
    break;
  } else if (num == n) {
    console.log("Didn't find value");
  }
}

//Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
n = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);

for (let i = start; start <= n; i++) {
  if (i % fizzDivisor == 0 && buzzDivisor == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % fizzDivisor == 0) {
    console.log(i, "FIZZ");
  } else if (i % fizzDivisor == 0) {
    console.log(i, "BUZZ");
  }
}
