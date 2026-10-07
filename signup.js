







document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let message = document.getElementById("message");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let usernameExists = users.some((user) => user.username === username);
  if (usernameExists) {
    message.style.color = "red";
    message.textContent = "Username already exists!";
    return;
  }

  let emailExists = users.some((user) => user.email === email);
  if (emailExists) {
    message.style.color = "red";
    message.textContent = "Email already registered!";
    return;
  }

  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
    return;
  }

  if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  let newUser = { name, username, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.textContent = "Sign up successful! Redirecting to login...";

  document.getElementById("signupForm").reset();

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1200);
});