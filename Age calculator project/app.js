const btn1 = document.getElementById("btn");
const birthday1 = document.getElementById("birthday");
const result1 = document.getElementById("result");

function calculateAge(){

    const birthdayValue = birthday1.value;
    if (birthdayValue === ""){
        alert("please Enter your birthDay");
    }else{
        const age = getAge(birthdayValue);
        result1.innerText = `your age is ${age} ${age > 1 ? "years" : "years"} old`;    
    }


}


function getAge(birthdayValue){

    const currentDate = new Date();
    const birthDayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthDayDate.getFullYear();
    const month = currentDate.getMonth() - birthDayDate.getMonth();

    if (   month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
      }
    
      return age;



}
btn1.addEventListener("click", calculateAge);         