function showPayment() {
  const method = document.querySelector('input[name="payment"]:checked').value;
  const div = document.getElementById("paymentDetails");

  if (method === "UPI") {
    div.innerHTML = `<input placeholder="UPI ID (abc@ybl)">`;
  } else if (method === "Card") {
    div.innerHTML = `
      <input placeholder="Card Number">
      <br><br>
      <input placeholder="Expiry">
      <br><br>
      <input placeholder="CVV">
    `;
  } else {
    div.innerHTML = "";
  }
}

function placeOrder() {
  const phone = document.getElementById("phone").value;

  // ❌ Defect: only length checked
  if (phone.length !== 8) {
    document.getElementById("error").innerText = "Invalid phone number";
    return;
  }

  document.getElementById("success").innerHTML =
    "✅ Order placed successfully!<br>🚚 Delivery partner is on the way 😊🍔";
}
