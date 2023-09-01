document.addEventListener("DOMContentLoaded", function() {
    var create = document.getElementById("linkCreateAccount");
    var haveAcc = document.getElementById("linkLogin");
    var formLogin = document.getElementById("Login");
    var formCreateAcc = document.getElementById("CreateAccount");
  
    create.addEventListener("click", function(e) {
      e.preventDefault();
  
      hide(formLogin);
      show(formCreateAcc);
    });
  
    haveAcc.addEventListener("click", function(e) {
      e.preventDefault();
  
      show(formLogin);
      hide(formCreateAcc);
    });
  });
  
  function hide(elem) {
      elem.classList.add("form--hidden");
      elem.classList.remove("form--unhidden");
  }
  
  function show(elem) {
    elem.classList.add("form--unhidden");
    elem.classList.remove("form--hidden");
  }