


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("message");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const adminEmail = "random1223@domain.com";
    const adminPassword = "12345678";
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!email || !password) {
      message.textContent = "Please enter both email and password.";
      return;
    }

    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters.";
      return;
    }

    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("currentUser", JSON.stringify({ name: "Admin", email: adminEmail }));
      window.location.href = "wc.html";
    } else if (matchedUser) {
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      window.location.href = "wc.html";
    } else {
      message.textContent = "Invalid email or password.";
    }
  });
});