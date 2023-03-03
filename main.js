const week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
week.map((item, ind) => {
    const day = new Date().getDay()
    if (ind + 1 == day) {item = `<i>${item}</i>`}
    item == "Суббота" || item == "Воскресенье" ?  document.write(`<b>${item}</b><br>`) : document.write(`${item}<br>`);
})
const arr = ["234","3563","1234","0798","72368","6336","3845"];
const res = arr.filter((item) => item.charAt(0) == 3 || item.charAt(0) == 7)
console.log(res)