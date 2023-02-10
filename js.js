function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(" .mobile-nav-toggle");

navToggle.addEventListener("click" , () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }
});

/* Performance Page*/

const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "inline-flex";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};
