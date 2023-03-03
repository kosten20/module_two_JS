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
const amount = checkPrompt("Во сколько обойдуться обязательные статьи расходов?", "number");
const deposit = confirm("Есть ли у вас вклад в банке?")
const profit = checkPrompt("У тебя есть дополнительные деньги? Если да то на какую сумму?", "number");
const purpose = checkPrompt("Сколько ты хочешь накопить?", "number");
const extraMoney = checkPrompt(`Перечислите возможный доход за ваши дополнительные работы ${profit}`)

function getAccumulatedIncome() {
    return money + profit - amount + extraMoney;
}

const accumulatedIncome = getAccumulatedIncome()

function getTargetMonth() {
    return Math.round(purpose / accumulatedIncome);
}

console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
const budGetDay = accumulatedIncome / new Date(year, month + 1, 0).getDate();
console.log('Дневной бюджет', budgetDay);

if (budGetDay >= 6000) {
    console.log("У вас большой уровень дохода")
} else if (budGetDay >= 3000 && budGetDay <= 6000) {
    console.log("У вас средний уровень дохода")
} else if (budGetDay <= 3000 && budGetDay >= 0) {
    console.log("К сожалению у вас доход ниже среднего")
}
