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

        if(searchMore.classList.contains('search-more-active')){
            moreBtn.textContent = 'x';
        } else {
            moreBtn.textContent = '...';
        }

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
        let search = searchInput.value.toLowerCase();

        for(let i = 0; i < localsGuide.length; i++){
            if(localsGuide[i].innerHTML.toLowerCase().includes(search) || localsGuide[i].classList.contains(search)){
                localsGuide[i].style.display = 'block';
            } else {
                localsGuide[i].style.display = 'none';
            }
        }
       
        searchInput.value = '';
    })



}

search();

