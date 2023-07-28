// const dayInput = document.querySelector("#day");
// const monthInput = document.querySelector("#month");
// const yearInput = document.querySelector("#year");



// TODO Age calculation
function calculateAge() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Adding 1 to get the month as 1 to 12.
  const currentDay = new Date().getDate();

  const day = parseInt(document.querySelector("#day").value);
  const month = parseInt(document.querySelector("#month").value);
  const year = parseInt(document.querySelector("#year").value);

  // Check if the input values are valid numbers
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    // Handle the case when the input values are not valid
    document.querySelector(".age-val").textContent = "Invalid input";
    return;
  }

  // Basic validation for the input values (optional)
  if (day < 1 || day > 31 || month < 1 || month > 12 || year <= 0) {
    document.querySelector(".age-val").textContent = "Invalid date";
    return;
  }

  let ageYear = currentYear - year;
  let ageMonth = currentMonth - month;
  let ageDay = currentDay - day;

  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
    ageMonth = ageMonth + 12;
  }

  if (ageDay < 0) {
    const daysInLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    ageDay = ageDay + daysInLastMonth;
    ageMonth--;
  }

  // Display the calculated age in the HTML element
  document.querySelector(".year-val").textContent = `${ageYear}`;
  document.querySelector(".month-val").textContent = `${ageMonth}`;
  document.querySelector(".day-val").textContent = `${ageDay}`;
}

// Add event listeners to the input fields using the input event
document.querySelector("#day").addEventListener("input", calculateAge);
document.querySelector("#month").addEventListener("input", calculateAge);
document.querySelector("#year").addEventListener("input", calculateAge);







