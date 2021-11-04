const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const fillToggle = document.querySelector(".filter-toogle");
const categories = document.querySelector(".filter");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})
fillToggle.addEventListener('click', function(){
    categories.classList.toggle("showcategories");
})