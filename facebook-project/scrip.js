function menuToggle() {
    var x = document.getElementById("settingsMenu");
    if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
        }
    }
    
 const darkBtn = document.getElementById("dark-btn");
  darkBtn.onclick = function(){
      darkBtn.classList.toggle('dark-btn-on');
      document.body.classList.toggle("light-mode");
}
