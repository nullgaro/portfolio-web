function navMenu(){
    const body = document.getElementsByTagName('body')[0];
    const navButton = document.getElementById('nav-button');
    const nav = document.getElementsByTagName('nav')[0];
    const navLinks = document.getElementsByClassName('nav-links')[0];

    navButton.onclick = () =>{
        nav.classList.toggle('nav-active');
        body.classList.toggle('body-overflow');
    }

    navLinks.onclick = () =>{
        nav.classList.toggle('nav-active');
        body.classList.toggle('body-overflow');
    }
}
navMenu();