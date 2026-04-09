function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (name === "") {
    alert("Name is required");
    return false;
  }

  if (email === "") {
    alert("Email is required");
    return false;
  }

  if (age === "" || age < 16) {
    alert("Age must be 16 or above");
    return false;
  }

  if (course === "") {
    alert("Please select a course");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  alert("Student Registered Successfully!");
  return true;
}
