import Mortgage from "./mortgage2";

document.getElementById("calcBtn").addEventListener("click", () => {
  let principal = document.getElementById("principal").value;
  let years = document.getElementById("years").value;
  let rate = document.getElementById("rate").value;

  let mortgage = new Mortgage(principal, years, rate);

  let monthlyPayment = mortgage.monthlyPayment;
  let monthlyRate = mortgage.rate / 100 / 12;
  let amortization = mortgage.amortization;

  document.getElementById("monthlyPayment").innerHTML =
    monthlyPayment.toFixed(2);
  document.getElementById("monthlyRate").innerHTML = (
    monthlyRate * 100
  ).toFixed(2);
  amortization.forEach((month) => console.log(month));
});
