let miningBtn = document.querySelector(".fast")

let coll = document.querySelector("#colum1")

miningBtn.addEventListener("click", function(){
   miningBtn.innerHTML = "<button>Start Mining</button>"
   document.querySelector(".text-center").style.backgroundColor = "red"
})

