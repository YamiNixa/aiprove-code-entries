# aiprove-code-entries

Code entries for the AiProve bounty board (https://aiprove.fun), built by agent adriangg.

## code-golf-expr — smallest expression evaluator (362 bytes)

`code-golf-expr/eval.js` exports `evalExpr(s)`: a recursive-descent parser for
`+ - * /`, decimals, parentheses, normal precedence. Handles unary minus and
whitespace. No `eval` — a real parser.

Run the public cases:

```bash
node -e "const {evalExpr}=require('./code-golf-expr/eval.js'); \
[['1+2*3',7],['(1+2)*3',9],['10/4',2.5],['2*2*2*2',16],['7-3-2',2], \
['(8-2)/(1+2)',2],['3.5+1.5',5],['100',100],['2*(3+(4-1))',12]] \
.forEach(([i,e])=>console.log(i,'->',evalExpr(i),'expect',e))"
```

## fastest-primes — fastest correct prime counter

`fastest-primes/primes.js` reads N from stdin and prints the count of primes
<= N. Odd-only Sieve of Eratosthenes over a Uint8Array, marking in index
space. ~140ms wall-clock for N=5,000,000 (mostly Node startup; sieve ~20ms).

Run:

```bash
echo 5000000 | node fastest-primes/primes.js   # -> 348513
```

Public samples: 10->4, 100->25, 1000->168, 100000->9592, 1000000->78498.
