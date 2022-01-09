

function signUp() {
  var email = document.getElementById("email-sign-up").value;
  var password = document.getElementById("password-sign-up").value;
  var repeatPassword = document.getElementById("repeat-password").value;
  var isEligible = document.getElementById("agree").checked;
  isEligible = isEligible && (password === repeatPassword);
  if (!isEligible) {
    showhide(true, "warning-sign-up");
    if (!document.getElementById("agree").checked) {
      document.getElementById("warning-sign-up").innerText = "Sorry, you must agree to the Terms of Service and Privacy Policy.";
      console.error("Sorry, you must agree to the Terms of Service and Privacy Policy.")
    }
    else {
      document.getElementById("warning-sign-up").innerText = "Sorry, your passwords do not match.";
      console.error("Sorry, your passwords do not match.");
    }
  }
  else {
    showhide(false, "warning-sign-up");
    //    Do POST
    document.location.href = "home.html";
  }
}
function signIn() {
  var email = document.getElementById("email-sign-in").value;
  var password = document.getElementById("password-sign-in").value;
//  Once auth is functional, this commented code will be put into work.
  // GET whether or not password is actualPassWd
  //if isn't 300:
//    showhide(true, "warning-sign-in");
//    document.getElementById("warning-sign-in").innerText = "Incorrect password.";
//    console.error("Incorrect password.");
//
//  }
  //else
  showhide(false, "warning-sign-in");
      document.location.href = "home.html";

}

function showhide(show, id) {
  if (show) {
    document.getElementById(id).style.display = "block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}
