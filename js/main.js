let hamburger = document.querySelector(".burger");

hamburger.onclick = function() {
    let elUl = document.querySelector(".ul");
    elUl.classList.toggle("active");
}