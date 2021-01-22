
// Data 1
let netsScores = [96, 108, 89];
let knicksScores = [88, 91, 110];

let netsAvg = ((netsScores[0] + netsScores[1] + netsScores[2]) / 3).toFixed(2);
let knicksAvg = ((knicksScores[0] + knicksScores[1] + knicksScores[2]) / 3).toFixed(2);
console.log("Data 1:\n\nNets' average: " + netsAvg + "\nKnicks' average: " + knicksAvg);

if (netsAvg === knicksAvg) {
    console.log("Draw!");
} else if (netsAvg > knicksAvg) {
    console.log("Nets wins!");
} else {
    console.log("Knicks wins!");
}




// Data Bonus 1
console.log("\n-----------------------------------\n\n");
netsScores = [97, 112, 101];
knicksScores = [109, 95, 123];

netsAvg = ((netsScores[0] + netsScores[1] + netsScores[2]) / 3).toFixed(2);
knicksAvg = ((knicksScores[0] + knicksScores[1] + knicksScores[2]) / 3).toFixed(2);
console.log("Data Bonus 1:\n\nNets' average: " + netsAvg + "\nKnicks' average: " + knicksAvg);

if (netsAvg >= 100 && netsAvg > knicksAvg) {
    console.log("Nets wins!");
} else if (knicksAvg >= 100 && knicksAvg > netsAvg) {
    console.log("Knicks wins!");
} else if (knicksAvg === netsAvg) {
    console.log("Draw!");
} else {
    console.log("No one wins!");
}





// Data Bonus 2
console.log("\n-----------------------------------\n\n");
netsScores = [97, 112, 101];
knicksScores = [109, 95, 106];

netsAvg = ((netsScores[0] + netsScores[1] + netsScores[2]) / 3).toFixed(2);
knicksAvg = ((knicksScores[0] + knicksScores[1] + knicksScores[2]) / 3).toFixed(2);
console.log("Data Bonus 2:\n\nNets' average: " + netsAvg + "\nKnicks' average: " + knicksAvg);

if (netsAvg < 100 && knicksAvg < 100) {
    console.log("Since both team does't have a minimum score of 100, no team wins the trophy!");
} else {
    if (netsAvg === knicksAvg) {
        console.log("Draw!");
    } else if (netsAvg > knicksAvg) {
        console.log("Nets wins!");
    } else {
        console.log("Knicks wins!");
    }
}






// Activity B
console.log("\n-----------------------------------\n\n");
let bill = 275;
let tip;
switch (bill >= 30 && bill <= 300) {
    case true:
        tip = bill * 0.15;
        break;
    case false:
        tip = bill * 0.20;
        break;
}

let total = bill + tip;
console.log("The bill was " + bill.toFixed(2) + ", the tip was " + tip.toFixed(2) + ", and the total value is " + total.toFixed(2));


bill = 28;
switch (bill >= 30 && bill <= 300) {
    case true:
        tip = bill * 0.15;
        break;
    case false:
        tip = bill * 0.20;
        break;
}
total = bill + tip;
console.log("The bill was " + bill.toFixed(2) + ", the tip was " + tip.toFixed(2) + ", and the total value is " + total.toFixed(2));


bill = 430;
switch (bill >= 30 && bill <= 300) {
    case true:
        tip = bill * 0.15;
        break;
    case false:
        tip = bill * 0.20;
        break;
}
total = bill + tip;
console.log("The bill was " + bill.toFixed(2) + ", the tip was " + tip.toFixed(2) + ", and the total value is " + total.toFixed(2));







// Activity C
console.log("\n-----------------------------------\n\n");
function celsiusToFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(2);
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}

let celsius = 30;
console.log(celsius + "\u00B0C is " + celsiusToFahrenheit(celsius) + "\u00B0F");

let fahrenheit = 80;
console.log(fahrenheit + "\u00B0F is " + fahrenheitToCelsius(fahrenheit) + "\u00B0C");