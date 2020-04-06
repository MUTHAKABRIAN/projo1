var sheds = [
    {
        name: "Shed A",
        numberOfCows: 34,
        avgProd: 15
    },
    {
        name: "Shed B",
        numberOfCows: 11,
        avgProd: 28
    },
    {
        name: "Shed C",
        numberOfCows: 27,
        avgProd: 18
    },
    {
        name: "Shed D",
        numberOfCows: 52,
        avgProd: 11

    }
];
var numberOfSheds = 4;
var months = {January: 31, February:29, March:31, April:30, May:31, June:30, July:31, August:31, September:30, October:31, November:30, December:31};
function totalProduction(verbose){
total_production = 0;
i = 0;
while(i < numberOfSheds){

    total_production += sheds[i].numberOfCows * sheds[i].avgProd;
    shed_production = sheds[i].numberOfCows * sheds[i].avgProd;
    if (verbose === true){
        console.log("Your production in " + sheds[i].name + " " + shed_production.toString() + " litres per day");
    }
    // no infinite loop
    i += 1;
}
if(verbose === true){
    console.log("The total production is" +total_production.toString()+ "litres per day");
}
return total_production;
}
totalProduction(verbose = true);
//  a function to compute how much we'll receieve on a week as well as the year
function incomeOverTime(selling_price, time, verbose){
// Calculate income for a day
dailyIncome = totalProduction() * selling_price;
return dailyIncome * time;
}
//  show weekly and yearly income
console.log(" ");
console.log("Your weekly income will be Ksh " + incomeOverTime(45,7));
console.log("Your yearly income will be Ksh " + incomeOverTime(45,365));
// incomeOverTime(45,verbose = true);
        console.log( " ");
// Computing monthly income
for (var key in months){
        monthly_income = incomeOverTime(45, months[key]);
        console.log("Your income for " + key + " is " + monthly_income.toString());
}