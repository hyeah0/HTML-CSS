var dropdownMenu = document.querySelector(".dropdown-menu")
var dropdownButton = document.querySelector(".dropdown-button")

dropdownButton.addEventListener("click", function(event) {
  if (this.active) {
    dropdownMenu.classList.remove("active")
  } else {
    dropdownMenu.classList.add("active")
  }

  this.active = !this.active
})

dropdownButton.active = false


// =========== 연습 =========== //
// let dropdownMenuP = document.querySelector(".dropdownMenuPractice");
// let dropdownButtonP = document.querySelector("buttonPractice");

// dropdownButtonP.addEventListener("click",function(event)){
//     if(this.active){
//         dropdownMenuP.classList.remove("active");
//     }else{
//         dropdownMenuP.classList.add("active");
//     }
//     this.active =!this.active;
// }

// droupdownButtonp.active =false;