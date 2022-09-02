// typing animation
var typed = new Typed(".typing" , { 
    strings: ["Developer", "Designer","Freelancer"],
    typeSpeed: 100,
    backSpeed:60,
    loop: true
});

//active navbar
let nav = document.querySelector(".menubar-hide");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 30){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");

    }
}

function slidebarToggal() {
    var x = document.getElementById("slidebar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  