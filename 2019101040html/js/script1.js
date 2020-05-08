var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction(); myFunction();};

var navbar = document.getElementById("navbartop");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}