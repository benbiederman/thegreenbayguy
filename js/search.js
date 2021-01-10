const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const xBtn = document.querySelector('.x-btn');
const localsGuide = document.querySelectorAll('.lg');
const errorMessage = document.querySelector('.error-message');
const disclaimer = document.querySelector('.disclaimer');
const moreBtn = document.querySelector('.more-btn');
const searchMore = document.querySelector('.search-more');
const searchMoreLinks = document.querySelectorAll('.search-more li');

search();
moreOptions();

function search() {
    errorMessage.style.display = 'none';
    disclaimer.style.display = 'block';

    //Input value changing adds or removes X btn
    searchInput.addEventListener('input', (e) => {
        if(searchInput.value === ''){
            xBtn.style.display = 'none';
        } else {
            xBtn.style.display = 'block'
        }
    })

    //X Button
    xBtn.addEventListener('click', (e) => {
        searchInput.value = '';
        xBtn.style.display = 'none';
        errorMessage.style.display = 'none';
        disclaimer.style.display = 'block';

        for(let i = 0; i < localsGuide.length; i++){
            localsGuide[i].style.display = 'block';
        }
    })

    //Searches through divs on click of search btn
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let searchResults = 0;
    
        search = searchInput.value.toLowerCase();

        //Check if input, if input run search
        if(search === '' ){
            searchInput.classList.add('search-input-error');
        } else {
            searchInput.classList.remove('search-input-error');
            for(let i = 0; i < localsGuide.length; i++){
                if(localsGuide[i].innerHTML.toLowerCase().includes(search) || localsGuide[i].classList.contains(search)){
                    localsGuide[i].style.display = 'block';
                    searchResults++;
                } else {
                    localsGuide[i].style.display = 'none';
                }
            }

            //If no search results, show error message
            if(searchResults === 0){
                errorMessage.style.display = 'block';
                disclaimer.style.display = 'none';
            } else {
                errorMessage.style.display = 'none';
                disclaimer.style.display = 'block';
            }
        }
    })
}

function moreOptions() {
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
}


