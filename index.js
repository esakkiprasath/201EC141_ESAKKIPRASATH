const express = require('express');
const app = express();
const port = 3000;

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};


app.get('/numbers/primes', (req, res) => {
  const primes = [];
  for (let i = 2; i <= 13; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  res.json({ numbers: primes });
});



app.get('/numbers/fibo', (req, res) => {
  const fibonacci = [1, 1];
  let nextNum = 0;
  while (nextNum <= 8) {
    nextNum = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (nextNum <= 100) {
      fibonacci.push(nextNum);
    }
  }
  res.json({ numbers: fibonacci });
});



app.get('/numbers/odd', (req, res) => {
  const odds = [];
  for (let i = 1; i <= 23; i += 2) {
    odds.push(i);
  }
  res.json({ numbers: odds });
});



app.get('/numbers/rand', (req, res) => {
  const random = [];
  for (let i = 0; i < 13; i++) {
    random.push(Math.floor(Math.random() * 100) + 1);
  }
  res.json({ numbers: random });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
