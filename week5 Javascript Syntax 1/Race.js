
function doIt(){
  let name = document.getElementById("name").value;
  let earlyOrLate = document.getElementById("early-or-late").value;
  let age = AgeCalculation();
  let number = 0;
  if(age < 18){
    number = Math.floor(Math.random() * (2000) +1000);
    earlyOrLate = "12:30";
  }else{
    number = Math.floor(Math.random() * (999) +1);
  }
  document.getElementById("welcome").innerHTML = `Welcome aboard ${name}!`
  document.getElementById("p").innerHTML = `Your number is ${number}, the race starts for you at ${earlyOrLate}. Good luck!`
}

function AgeCalculation() {
  var date = document.getElementById("date").value;
  console.log(date);
  var birthday = new Date(date);
  var today = new Date();
  var age = today.getFullYear() - birthday.getFullYear();
  var month = today.getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}
