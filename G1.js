//Number 1
//Calculating tax that accepts the income of a person in Nigeria and returns the tax payable
function Calculate_Tax(income){
    let tax_rate = 0.15;
    let tax_payable = income * tax_rate;
    return tax_payable;
}
let income = 40000;
console.log(`tax_payable: ${Calculate_Tax(income)}`);

//Number 2
function greet_user(Sam){
    console.log(`Welcome to Africa, ${Uganda}!`);

}