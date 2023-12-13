          function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (firstName.length < 5 || lastName.length < 5) {
    alert("First name and last name should be at least 5 characters");
    return false;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return false;
  }

  if (!/\d{1,2}\/\d{1,2}\/\d{2}/.test(date)) {
    alert("Please enter a valid date in the format dd/mm/yyyy");
    return false;
  }

  if (!/\d{10}/.test(phone)) {
    alert("Phone number must contain 10 digits");
    return false;
  }

  if (message.length < 50) {
    alert("Message should be at least 50 characters");
    return false;
  }

  return true;
}
