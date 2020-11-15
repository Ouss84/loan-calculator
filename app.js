//defining the UI variables
const form = document.querySelector('#loan-form');
const ammount = document.querySelector('#ammount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

//events when the submit button is fired
form.addEventListener('submit', calculatedResult);

//defining calculatedResult function
function calculatedResult(e){
    //defining the formula's parameters
    const principal = parseFloat(ammount.value);
    const calculatedInterest = parseFloat(interest.value) /100 /12;
    const calculatedPayments = parseFloat (years.value) * 12;
    const factor = Math.pow(1+calculatedInterest, calculatedPayments);
    const monthly = (principal * factor * calculatedInterest) / (factor - 1);
    if (isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else{
console.log('error');
    }
    e.preventDefault();
}
