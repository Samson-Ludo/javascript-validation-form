function CheckAll() {

  // Validation for Username
    var flag = true;
    var length = document.getElementById('username').value.length;
    var value = document.getElementById('username').value;
    

    if (length < 6) {
        alert("username must be 6 characters or more");
        return false;
    }



    //Validation for password
    var lengthPass = document.getElementById('password').value.length;
    var valuePass = document.getElementById('password').value;
    var confirmPass = document.getElementById('confirm-password').value;
   

    if (valuePass !== confirmPass) {
        alert("Passwords do not match!");
        return false;
    }
    if (!(length >= 6 || length <= 20)) {
      alert("Username Must be 6-20 Characters long");
      return false;
    }
    if (!(lengthPass >= 6 || lengthPass <= 20)) {
      alert("Password must be 6-20 characters long")
      return false
  
    }


    // Validation for Email 
    var check = false;
    var valueMail = document.getElementById("email").value;
    var shtrudel = 0;
    for (var i = 0; i < valueMail.length; i++) {
      if (value.chatAt(i) == '@') {
        shtrudel++;
        for (var j = i; j < valueMail.length; j++) {
          if (valueMail.charAt(j) == '.') {
            check = true;
          }
        }
      }
    }
    if (shtrudel > 1) {
      alert("You're only allowed to have 1 '@' sign");
      return false
    }
    if (!check) {
      alert("Your email has to include a '@' sign and a '.' sign");
      return false;
    }
   
    return true;
  } 
  
  function AgreeCheck() {
    document.getElementById("agree").checked = CheckAll();
    document.getElementById("sub").disabled = !CheckAll();
  }