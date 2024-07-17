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
// console.log(sumToN(5));

function reverseCount(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}

// reverseCount(10);

function doWhile(n) {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= n);
}
// doWhile(5)

function printStarPattern(rows) {
  for (let i = 1; i < rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// printStarPattern(5);

function skipN(n) {
  for (let i = 1; i <= 10; i++) {
    if (i == n) continue;
    console.log(i);
  }
}
// skipN(5)

function break5(n) {
  for (let i = 1; i <= n; i++) {
    if (i == 5) break;
    console.log(i);
  }
}
// break5(10);
