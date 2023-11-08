function getInputValue(inputID) {
  const inputField = document.getElementById(inputID);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // Clear input field
  inputField.value = "";
  return amountValue;
}

function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalElementText = totalElement.innerText;
  const previousTotalElement = parseFloat(totalElementText);
  totalElement.innerText = previousTotalElement + amount;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("total-balance");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("total-balance");
  const previousBalanceTotal = getCurrentBalance();

  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

// Deposit button
document.getElementById("deposit-button").addEventListener("click", function () {
  const depositAmount = getInputValue("deposit-input");
  if (depositAmount > 0) {
    updateTotalField("total-deposit", depositAmount);
    updateBalance(depositAmount, true);
  }
});

// Withdraw button
document.getElementById("withdraw-button").addEventListener("click", function () {
  const withdrawAmount = getInputValue("withdraw-input");
  const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    updateTotalField("total-withdraw", withdrawAmount);
    updateBalance(withdrawAmount, false);
  }
});