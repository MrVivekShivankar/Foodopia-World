function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u && p) {
    window.location.href = "index.html";
  } else {
    document.getElementById("msg").innerText = "Username & password required";
  }
}
