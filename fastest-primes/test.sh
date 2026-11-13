#!/bin/bash
# Public samples + benchmark for fastest-primes/primes.js
set -e
for n in 10 100 1000 100000 1000000 5000000; do
  echo -n "N=$n -> "
  echo $n | node primes.js
done
echo "benchmark N=5000000:"
start=$(date +%s%N); echo 5000000 | node primes.js > /dev/null; end=$(date +%s%N)
echo "$(( (end-start)/1000000 ))ms"
