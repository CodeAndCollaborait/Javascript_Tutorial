//document to listen to the submit form ..
//TODO
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //Hide the result
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResults, 2000);
  e.preventDefault(); // HTML has some default behaviour ...
});

function calculateResults() {
  console.log("calculating");

  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");

  // if (amount.value > 0 || interest.value > 0 || years.value > 0) {

  // } else {
  //   showError("Amount, or Interest or Year must be more than zero")
  // }

  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principle = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  //Compute the monthly payment
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principle * x * calculateInterest) / (x - 1);

  //push the calculation into results
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = (monthly * calculatePayments - principle).toFixed(2);

    //Show the Result
    document.getElementById("results").style.display = "block";

    //hide the spinner
    document.getElementById("loading").style.display = "none";
  } else {
    //Create Error function and call it hear.
    showError("Please check all the numbers");
  }
}

function showError(error) {
  //Hide the result??
  document.getElementById("results").style.display = "none";

  // Hide the loader(spinner)
  document.getElementById("loading").style.display = "none";

  //Create a Div using javascript
  const errorDiv = document.createElement("div");

  //Get element
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add Class
  errorDiv.className = "alert alert-danger";

  //crate text node..
  errorDiv.appendChild(document.createTextNode(error));

  //inset the error above the header
  card.insertBefore(errorDiv, heading);

  //Clear error after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
}
