function Solution() {
  let n = BigInt(cl());
  let m = 998244353n;
  co(Number(((n % m) + m) % m));
}

let i = 0;
const lines = []

function cl() { return lines[i++] }
function co(str) { console.log(str)}
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', (input) => lines.push(input));
rl.on('close', Solution);