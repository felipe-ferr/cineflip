window.onscroll = function () { navbarScrollDown() };

function navbarScrollDown() {

  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("nav").style.height = "10vh";
    document.getElementById("nav").style.background = "rgba(0, 0, 0, 0.9)";
  }
  else {
    document.getElementById("nav").style.height = "12vh";
    document.getElementById("nav").style.background = "rgba(0, 0, 0, 0)";
  }


}