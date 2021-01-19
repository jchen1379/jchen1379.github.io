let lucasMass = 78, lucasHeight = 1.69;
let lucasBMI = lucasMass / lucasHeight ** 2;

let johnMass = 92, johnHeight = 1.95;
let johnBMI = johnMass / (johnHeight * johnHeight);


let lucasHigherBMI = (lucasBMI - johnBMI > 0);

console.log("Test Data 1:\nLucas and John are friends, Lucas is " + lucasHeight + "m tall and John is " + johnHeight + "m tall.")

if (lucasHigherBMI)
    console.log("So John has higher BMI than Lucas, that is " + johnBMI + ".");
else {
    console.log("So Lucas has higher BMI than John, that is " + lucasBMI + ".");
}



lucasMass = 95, lucasHeight = 1.88;
lucasBMI = lucasMass / lucasHeight ** 2;

johnMass = 85, johnHeight = 1.76;
johnBMI = johnMass / (johnHeight * johnHeight);


lucasHigherBMI = (lucasBMI - johnBMI > 0);

console.log("\n\nTest Data 2:\nLucas and John are friends, Lucas is " + lucasHeight + "m tall and John is " + johnHeight + "m tall.")

if (lucasHigherBMI)
    console.log("So John has higher BMI than Lucas, that is " + johnBMI + ".");
else {
    console.log("So Lucas has higher BMI than John, that is " + lucasBMI + ".");
}