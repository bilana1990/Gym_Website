const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
var sectionIndex = 0;

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    updateSlider();
  });
});


// განმეორებითი ფუნქციონალი გატანილია ერთ ფუნქციაში და გამოძახებული
// იმ ადგილებზე სადაც იყო საჭირო
function updateSlider() {
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
}

const interval = setInterval(function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
  updateSlider();
}, 4000);





function BurgerMenu(){
  let navmenu=document.querySelector(".navmenu")
  navmenu.classList.toggle("active")

  let slider=document.querySelector(".slider")
  slider.classList.toggle("active")

  let trainers=document.querySelector(".OUR_GYM_TRAINERS")
  trainers.classList.toggle("active")
}
