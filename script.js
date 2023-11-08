document.getElementById("submit").addEventListener("click", function () {
  // Get user email
  const emailField = document.getElementById("email");
  const userEmail = emailField.value;

  // Get user password
  const passwordField = document.getElementById("password");
  const userPassword = passwordField.value;

  // Check user email and password
  if (userEmail == "example@abc.com" && userPassword == "12345") {
    window.location.href = "transaction.html";
  }
});