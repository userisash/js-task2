const name = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");

name.addEventListener("input", function(e) {
  console.log("Name: " + name.value);
});

age.addEventListener("input", function() {
  console.log("Age: " + age.value);
});

email.addEventListener("input", function() {
  console.log("Email: " + email.value);
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const newWindow = window.open("", "", "width=300,height=200");
  newWindow.document.write("Name: " + name.value + "<br>Age: " + age.value + "<br>Email: " + email.value + "<br>");
  newWindow.document.write("<button id='confirm'>Confirm</button>");
  newWindow.document.write("<button id='change'>Change Information</button>");
  newWindow.document.getElementById("confirm").addEventListener("click", function() {
    alert("Congratulations, you successfully sent this form!");
  });
  newWindow.document.getElementById("change").addEventListener("click", function() {
    newWindow.close();
  });
});
