function search() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const localsGuide = document.querySelectorAll('.lg');
    const moreBtn = document.querySelector('.more-btn');
    const searchMore = document.querySelector('.search-more');
    const searchMoreLinks = document.querySelectorAll('.search-more li');


    moreBtn.addEventListener('click', e => {
        e.preventDefault();
        searchMore.classList.toggle('search-more-active');

        searchMoreLinks.forEach((link, index) => {
            if(link.style.animation) {
             link.style.animation = '';
            }else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .25}s`;
            }
           });
    })

    searchBtn.addEventListener('click', e => {
        e.preventDefault();



        searchInput.value = '';
    })

    









}

search();

