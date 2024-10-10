
const  tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents')

function opentab(tabname){

    for(let i = 0; i< tabLinks.length; i++){
        tabLinks[i].classList.remove('active-link');
    }

    for(let i = 0; i< tabContents.length; i++){
        tabContents[i].classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


const sidemenu = document.getElementById('sidemenu')

function openMenu(){
    sidemenu.style.right = "0";
}
function closeMenu(){
    sidemenu.style.right = "-191px";
}