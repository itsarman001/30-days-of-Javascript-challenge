function loop10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  return;
}
// loop10()

function tableOf(n) {
  let x = n;
  console.log(`Table of ${n}`);
  console.log(x);
  for (let i = 0; i < 9; i++) {
    x += n;
    console.log(x);
  }
  return;
}
// tableOf(5);

function sumToN(n) {
  let i = 1;
  let j = 0;
  while (i <= n) {
    j += i;
    i++;
  }
  return j;
}
console.log(sumToN(5));
