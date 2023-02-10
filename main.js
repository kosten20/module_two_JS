const oneNumber = (+prompt('Введите первое число')).toFixed(1)
const twoNumber = (+prompt('Введите второе число')).toFixed(1)

console.log(`При сложение чисел ${oneNumber} + ${twoNumber} = ${oneNumber + twoNumber}`);
console.log(`При вычитании чисел ${oneNumber} - ${twoNumber} = ${oneNumber - twoNumber}`);
console.log(`При деления чисел ${oneNumber} / ${twoNumber} = ${oneNumber / twoNumber}`);
console.log(`При умножении чисел ${oneNumber} * ${twoNumber} = ${oneNumber * twoNumber}`); 
console.log(`Остаток от деления ${oneNumber} % ${twoNumber} = ${oneNumber % twoNumber}`);
