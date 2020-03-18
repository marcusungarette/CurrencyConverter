const currency_One = document.getElementById('currency-one');
const amount_One = document.getElementById('amount-one');
const currency_Two = document.getElementById('currency-two');
const amount_Two = document.getElementById('amount-two');

const rateTotal = document.getElementById('rate');

const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const calculate_One = currency_One.value;
  const calculate_Two = currency_Two.value;

  fetch(`${API_LINK}${calculate_One}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[calculate_Two];

      rateTotal.innerText = `1 ${calculate_One} = ${rate} ${calculate_Two}`;

      amount_Two.value = (amount_One.value * rate).toFixed(2);
    });
}

// Event listeners
currency_One.addEventListener('change', calculate);
amount_One.addEventListener('input', calculate);
currency_Two.addEventListener('change', calculate);
amount_Two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currency_One.value;
  currency_One.value = currency_Two.value;
  currency_Two.value = temp;
  calculate();
});
calculate();
