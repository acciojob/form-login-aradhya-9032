function getFormvalue() {
	  var firstNameInput = document.getElementById("firstname");
  var lastNameInput = document.getElementById("lastname");

  // Get the values of the first and last name inputs
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;
   alert( firstName + lastName);
}

