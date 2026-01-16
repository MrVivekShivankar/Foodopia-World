function placeOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const msg = document.getElementById("message");

  msg.className = "";
  msg.innerText = "";

  // DEFECT: Name accepts numbers
  if (!name) {
    msg.className = "error";
    msg.innerText = "Name is required";
    return;
  }

  // DEFECT: Phone accepts characters, only length = 8
  if (phone.length !== 8) {
    msg.className = "error";
    msg.innerText = "Invalid phone number";
    return;
  }

  msg.className = "success";
  msg.innerText = "Order placed successfully!";
}
