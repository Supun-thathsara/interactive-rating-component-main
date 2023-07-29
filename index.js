var count = null;
function inFunction(ele) {
     var btnValue = ele.innerText;
     var test = document.getElementById("rating-value").innerHTML= btnValue;
   
}

function change_section(){
  const thank_you = document.querySelector('#Thanks');
  thank_you.classList.remove("hidden");
  const rating =document.querySelector("#main-part");
  rating.classList.add("hidden");
}  

const btnList = document.querySelectorAll(".circle");

btnList.forEach(btn =>{
    btn.addEventListener('click',() =>{
        document.querySelector(".special")?.classList.remove("special");
        btn.classList.add("special");
    });
});