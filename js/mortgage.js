let calculateMonthlyPayment = function (principal, years, rate) {
  let monthlyRate = 0;
  if (rate) {
    monthlyRate = rate / 100 / 12;
  }
  let monthlyPayment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
  return { principal, years, rate, monthlyPayment, monthlyRate };
};

export let calculateAmortization = (principal, years, rate) => {
  let { monthlyRate, monthlyPayment } = calculateMonthlyPayment(
    principal,
    years,
    rate
  );
  let balance = principal;
  let amortization = [];
  for (let y = 0; y < years; y++) {
    let interestY = 0; // 年間の利息
    let principalY = 0; // 年間の元金返済
    for (let m = 0; m < 12; m++) {
      let interestM = balance * monthlyRate; // 月ごとの利息
      let principalM = monthlyPayment - interestM; // 月ごとの元金返済
      interestY += interestM;
      principalY += principalM;
      balance -= principalM;
    }
    amortization.push({ principalY, interestY, balance });
  }
  return { monthlyPayment, monthlyRate, amortization };
};
