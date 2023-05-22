function getFormvalue() {

  // Get the values of the first and last name inputs
  var firstName = Firstname.value;
  var lastName = Lastname.value;

  // Display the first and last name using alert
  alert("First Name: " + Firstname + "\nLast Name: " + Lastname);

  // Clear the form inputs
  Firstname.value = "";
  Lastname.value = "";
}

