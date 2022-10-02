function menuToggle() {
    var x = document.getElementById("settingsMenu");
    if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
        }
    }

window.addEventListener('mouseup', function(event){
    var x = document.getElementById("settingsMenu");
    if (event.target != x){
      x.style.display = "none";
    }
  });
    
 const darkBtn = document.getElementById("dark-btn");
  darkBtn.onclick = function(){
      darkBtn.classList.toggle('dark-btn-on');
      document.body.classList.toggle("light-mode");
}

const like = document.getElementById('like');
like.addEventListener('click', function onClick() {
  tlike.style.color = 'skyblue';
  thumb.style.color = 'skyblue';
});

