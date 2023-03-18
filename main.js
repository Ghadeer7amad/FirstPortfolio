/***Menu Show***/

/*const showMenu = (tID, nID) =>{
  const t = document.getElementById(tID),
  n = document.getElementById(nID)   

  if(t && n){
    t.addEventListener('click', ()=>{
        n.classList.t('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')*/


const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/***Active and remove menu***/

const navLink = document.querySelectorAll('.nav__link');

//Active Link
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}

navLink.forEach(n => n.addEventListener('click', linkAction))

///////////////////////////////////////////////



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    distance: '60px',
    duration: 2000,
    reset: true

});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__image',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




