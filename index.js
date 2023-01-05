let numA = 1;
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

//сначала я сделал опечатку и написал if (numA * numA === 0)
//но все равно вывдило правильно, как в задании, не могу понять почему,
//если например  в переменной numA = 1, то 1*1=1 и это !==0,
//но все равно срабатывет вложенный if
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

// Якщо число додатнє, парне, кратне 3 і 6 одночасно - вивести win, інакше - lose.
// Першим обробляти варіант з lose.

if (numA < 6 || numA % 6) {
  console.log("lose");
} else {
  console.log("win");
}
