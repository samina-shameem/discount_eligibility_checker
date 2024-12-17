//dom elements
const ageInput=document.getElementById('age');
const amountInput=document.getElementById('amount');
const checkButton=document.getElementById('checkDisount');
const result=document.getElementById('result');

//event listner

checkButton.addEventListener('click' ,() => {

//variables and data types
const age=parseInt(ageInput.ariaValueMax, 10);//number
const amount=parseInt(amountInput.value);//number

//"OR" operator logic
if(age <18 || age >60 || amount> 1000) {
    result.textContent="Congaratulations! You qualify for a discount.";
    result.style.color='green';
}else {
    result.textContent="Sorry, you do not quality for a discount.";
    result.style.color='red';
}


});