let oneNumber = prompt('Введите первое число')
let twoNumber = prompt('Введите второе число')

oneNumber = Number((+oneNumber).toFixed(1))
twoNumber = Number((+twoNumber).toFixed(1))

console.log(`При сложение чисел ${oneNumber} + ${twoNumber} = ${oneNumber + twoNumber}`);
console.log(`При вычитании чисел ${oneNumber} - ${twoNumber} = ${oneNumber - twoNumber}`);
console.log(`При деления чисел ${oneNumber} / ${twoNumber} = ${oneNumber / twoNumber}`);
console.log(`При умножении чисел ${oneNumber} * ${twoNumber} = ${oneNumber * twoNumber}`); 
console.log(`Остаток от деления ${oneNumber} % ${twoNumber} = ${oneNumber % twoNumber}`);
