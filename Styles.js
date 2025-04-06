document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Simple hardcoded check for login (you can replace this with real authentication)
  if (username === "user" && password === "password") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "Index.html"; // Redirect to products page
  } else {
    errorMessage.textContent = "Invalid username or password.";
}
});