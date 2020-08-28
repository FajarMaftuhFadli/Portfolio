//nav show / hide
var scrollBef = window.pageYOffset;
window.onscroll = function () {
  var scrollNow = window.pageYOffset;
  if (scrollBef < scrollNow) {
    document.getElementById("header-nav").style.top = "calc(-1*(30px + 3vw))";
  } else {
    document.getElementById("header-nav").style.top = "0";
  }
  scrollBef = scrollNow;
};

//hamburger
var ovrflw = 0;
function hamburgerAnim(btn) {
  btn.classList.toggle("btn-hamburger");
  if (ovrflw == 0) {/* 
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden"; */
    document.getElementById("nav-list").style.right = "0";
    ovrflw = 1;
  } else {/* 
    document.getElementsByTagName("BODY")[0].style.overflow = "visible"; */
    document.getElementById("nav-list").style.right = "calc(-1*(10px + 30vw))";
    ovrflw = 0;
  }
}

function errorAlert() {
  alert("Maaf. Contact service belum tersedia.");
}