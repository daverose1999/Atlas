const navToggle = document.querySelector(".navbar_toggle");
const navClose = document.querySelector(".navbar_close");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

navClose.addEventListener('click', function()
{
    links.classList.remove("show_nav");
}
) 