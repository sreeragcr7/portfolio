
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

// validation

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const span = document.getElementById('msg');
const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    if(name.value === ''){
        name.placeholder = 'Name is required.'
        name.classList.add('error')
    }else if(email.value === ''){
        email.placeholder = 'Email is required.'
        email.classList.add('error')
    }
})
