function navSlide() {
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li'); 


    menuBtn.addEventListener('click', e => {
        navList.classList.toggle('nav-list-active');
        navList.style.transition = 'all .5s ease';

        

        //Add/Remove solid header upon menu opening
        if(navList.classList.contains('nav-list-active')){
            menuBtn.innerHTML = '<p>Close</p>'
            header.classList.add('header-active');
            
        } else if (!navList.classList.contains('neav-list-active')) {
            menuBtn.innerHTML = '<p>Menu</p>'
            if(window.scrollY === 0){
                header.classList.remove('header-active');
            }
        }

        //Navigation Link fade in
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
             link.style.animation = '';
            }else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
           });
    })


    //Add solid header upon scroll
    window.addEventListener('scroll', () => {
        if(navList.classList.contains('nav-list-active') || window.scrollY > 0) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    })
}


navSlide();

