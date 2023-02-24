function checkPrompt(text, type = "string") {
    while(true) {
        const value = prompt(text);
        if (!isNaN(Number(value))) {
            return Number(value)
        } else if (typeof value  == type) {
            return value
        } else {
            alert("Некоренктные данные!")
        }
    }
}
const money = checkPrompt("Ваш месячный доход?", "number");
const expenses = checkPrompt("Перечислите возможные расходы за рассчитываемый период через запятую");
const amount = checkPrompt("Во сколько обойдуться обязательные статьи расходов?");
const deposit = confirm("Есть ли у вас вклад в банке?")
const profit = checkPrompt("У тебя есть дополнительные деньги? Если да то на какую сумму?", "number");
const purpose = checkPrompt("Сколько ты хочешь накопить?", "number");

const budgetMonth = money + profit - amount;
console.log(budgetMonth)

const period = Math.round(purpose / budgetMonth);

console.log(`тип данных money "${typeof money}", тип данных profit "${typeof profit}"`);
console.log(`период равен ${period} месяцев, Цель заработать ${purpose} рублей`);
const budGetDay = budgetMonth / 30;
console.log(budGetDay);

if (budGetDay >= 6000) {
    console.log("У вас большой уровень дохода")
} else if (budGetDay >= 3000 && budGetDay <= 6000) {
    console.log("У вас средний уровень дохода")
} else if (budGetDay <= 3000 && budGetDay >= 0) {
    console.log("К сожалению у вас доход ниже среднего")
}