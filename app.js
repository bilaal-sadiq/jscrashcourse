let cash = 50
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`You paid extra here ${difference} dollars change`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day")
}
else {
    console.log(`not enough money - you still owe ${difference * -1} dollars`)
}
