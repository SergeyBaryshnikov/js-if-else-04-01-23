let numA = 0;
let numB = 0;
let numC = 999;
let result;

// Є дві змінні, якщо вони з однаковим знаком - то перемножити і вивести результат,
// якщо з різними знаками - то поділити і вивести результат,
// якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат,
// якщо обидва нулі - то покласти в результат NaN і вивести результат.

if ((numA === 0 && numB !== 0) || (numA !== 0 && numB === 0)) {
  result = numC;
} else if ((numA > 0 && numB > 0) || (numA < 0 && numB < 0)) {
  result = numA * numB;
} else if ((numA > 0 && numB < 0) || (numA < 0 && numB > 0)) {
  result = numA / numB;
} else {
  result = NaN;
}
console.log(result);

if (numA * numB === 0 && numA !== numB) {
  result = numC;
} else if (numA * numB > 0) {
  result = numA * numB;
} else if (numA * numB < 0) {
  result = numA / numB;
} else {
  result = NaN;
}
console.log(result);

if (numA * numB === 0) {
  if (numA !== numB) {
    result = numC;
  } else {
    result = NaN;
  }
} else if (numA * numB > 0) {
  result = numA * numB;
} else if (numA * numB < 0) {
  result = numA / numB;
}
console.log(result);

result = numA * numB;
if (result === 0) {
  if (numA !== numB) {
    result = numC;
  } else {
    result = NaN;
  }
} else if (result < 0) {
  result = numA / numB;
}
console.log(result);

// Якщо число додатнє, парне, кратне 3 і 6 одночасно - вивести win, інакше - lose.
// Першим обробляти варіант з lose.

if (numA < 6 || numA % 6) {
  console.log("lose");
} else {
  console.log("win");
}
