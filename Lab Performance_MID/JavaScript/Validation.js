const UNIT_PRICE = 1000;
const DAYS = 30;

const quantityInput = document.getElementById('quantityPerDay');
const totalPriceInput = document.getElementById('totalPrice');
const errorMessage = document.getElementById('errorMessage');

let couponAlertShown = false;

function updateTotalPrice() {
  let quantity = Number(quantityInput.value);

  if (quantityInput.value === '') {
    quantity = 0;
  }

  if (quantity < 0) {
    quantity = 0;
    quantityInput.value = 0;
    errorMessage.textContent = 'Quantity cannot be less than 0.';
  } else {
    errorMessage.textContent = '';
  }

  const totalPrice = UNIT_PRICE * quantity * DAYS;
  totalPriceInput.value = totalPrice;

  if (totalPrice > 1000 && !couponAlertShown) {
    alert('Congratulations! You are eligible for a gift coupon.');
    couponAlertShown = true;
  }

  if (totalPrice <= 1000) {
    couponAlertShown = false;
  }
}

quantityInput.addEventListener('input', updateTotalPrice);

updateTotalPrice();
