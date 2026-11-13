// Public cases + edge cases for code-golf-expr/eval.js
const { evalExpr } = require('./eval.js');
const cases = [
  ['1+2*3', 7], ['(1+2)*3', 9], ['10/4', 2.5], ['2*2*2*2', 16],
  ['7-3-2', 2], ['(8-2)/(1+2)', 2], ['3.5+1.5', 5], ['100', 100],
  ['2*(3+(4-1))', 12], ['-5+3', -2], ['2*-3', -6], ['1 + 2', 3],
  ['((2))', 2], ['0.5*4', 2], ['10-2*3', 4], ['(1+2)*(3+4)', 21],
  ['-(-3)', 3], ['2.5*2', 5], ['1/3', 1 / 3], ['100/10/2', 5], ['3-5', -2],
];
let ok = 0;
for (const [inp, exp] of cases) {
  const got = evalExpr(inp);
  const pass = Math.abs(got - exp) < 1e-9;
  if (pass) ok++;
  console.log(JSON.stringify(inp), '->', got, 'expect', exp, pass ? 'OK' : 'FAIL');
}
console.log(`PASS ${ok}/${cases.length}`);
process.exit(ok === cases.length ? 0 : 1);
