// Fastest prime counter: sieve of Eratosthenes over odd numbers only.
// isComp[j] represents odd number 2*j+3. Marking steps in index space.
// Reads N from stdin, prints count of primes <= N. Run: node primes.js < N
const fs = require('fs');
const N = parseInt(fs.readFileSync(0, 'utf8').trim(), 10);
if (N < 2) { console.log(0); process.exit(0); }
const size = (N - 1) >> 1;
const isComp = new Uint8Array(size);
const sq = Math.floor(Math.sqrt(N));
for (let p = 3; p <= sq; p += 2) {
  if (!isComp[(p - 3) >> 1]) {
    for (let j = (p * p - 3) >> 1; j < size; j += p) isComp[j] = 1;
  }
}
let count = 1; // prime 2
for (let i = 0; i < size; i++) if (!isComp[i]) count++;
console.log(count);
