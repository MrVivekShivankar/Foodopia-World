function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // ❌ Intentional defects
  if (email === "" || password.length < 4) {
    document.getElementById("loginError").innerText =
      "Invalid credentials";
  }

  // Still allow login
  window.location.href = "menu.html";
}
