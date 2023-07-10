function calculateAge() {
  var birthdate = document.getElementById('birthdate').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  
  var age = calculateAgeFromBirthdate(birthdate, currentDate);
  
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = "Your age is: " + age + " years";
}

function calculateAgeFromBirthdate(birthdate, currentDate) {
  var birthdateArray = birthdate.split("-");
  var birthYear = parseInt(birthdateArray[0]);
  var birthMonth = parseInt(birthdateArray[1]);
  var birthDay = parseInt(birthdateArray[2]);
  
  var currentDateArray = currentDate.split("-");
  var currentYear = parseInt(currentDateArray[0]);
  var currentMonth = parseInt(currentDateArray[1]);
  var currentDay = parseInt(currentDateArray[2]);
  
  var age = currentYear - birthYear;
  
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }
  
  return age;
}
