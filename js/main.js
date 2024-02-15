document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded

  setTimeout(function () {
    // Show the signup modal after 3 seconds
    document.getElementById("signupModal").style.display = "block";
  }, 500); // Adjust the timeout duration as needed
});

// password filed

function togglePasswordVisibility(passwordField, eyeIcon) {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.src = "./js/openn-eye.png";
  } else {
    passwordField.type = "password";
    eyeIcon.src = "./js/closed-eye.png";
  }
}

var passwordField1 = document.querySelector(".p1");
var passwordField2 = document.querySelector(".p2");
var eyeIcon1 = document.querySelector(".icon1");
var eyeIcon2 = document.querySelector(".icon2");

eyeIcon1.addEventListener("click", function () {
  togglePasswordVisibility(passwordField1, eyeIcon1);
});

eyeIcon2.addEventListener("click", function () {
  togglePasswordVisibility(passwordField2, eyeIcon2);
});

// Clicking outside signup !
document.addEventListener("DOMContentLoaded", function () {
  var modalContents = document.getElementsByClassName("modal-content");

  document.addEventListener("click", function (event) {
    for (var i = 0; i < modalContents.length; i++) {
      var isClickInsideModal = modalContents[i].contains(event.target);

      if (isClickInsideModal) {
        // Click occurred inside one of the modal contents, no need to show alert
        return;
      }
    }

    // Click occurred outside all modal contents
    alert("Please sign up to proceed !");
  });
});

// loader

// document.getElementsByClassName('redirectButton').addEventListener('click', function() {
//         // Get the modal content element
//         var modalContent = document.getElementsByClassName('modal-content');

//         // Add a class to hide the modal content
//         modalContent.classList.add('hidden');

//     // Add 'loading' class to the loader
//     document.getElementById('loader').classList.add('loading');

//     // Set a timeout to remove the 'loading' class and trigger the redirection after 1 second
//     setTimeout(function() {
//         document.getElementById('loader').classList.remove('loading');
//         // Replace 'newpage.html' with the desired local HTML page
//         window.location.href = './date.html';
//     }, 1000);
// });

// redirect to main page
const signupButton = document.getElementById("signupButton");

// Attach event listener
signupButton.addEventListener("click", () => {
  window.location.href = "date.html";
});
