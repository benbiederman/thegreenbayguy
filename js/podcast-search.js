const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const xBtn = document.querySelector('.x-btn');
const localsGuide = document.querySelectorAll('.lg');
const errorMessage = document.querySelector('.error-message');
const moreBtn = document.querySelector('.more-btn');
const searchMore = document.querySelector('.search-more');
const searchMoreLinks = document.querySelectorAll('.search-more li');

search();
moreOptions();

function search() {
    errorMessage.style.display = 'none';

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
        

        for(let i = 0; i < localsGuide.length; i++){
            localsGuide[i].style.display = 'block';
        }
    })

    //Searches through divs on click of search btn
    searchBtn.addEventListener('click', (e) => {
        let searchResults = 0;
        e.preventDefault();
    
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
            if(searchResults == 0){
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        }
    })
}


function moreOptions(){


    moreBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        searchMore.classList.toggle('search-more-active')

        if(searchMore.classList.contains('search-more-active')){
            moreBtn.textContent = 'X';
            searchMoreLinks.forEach((link, index) => {
            //Search link animation
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .25}s`;

             link.addEventListener('click', (e) => {
                 switch(e.target.innerHTML){
                     case '1-10':
                         hide(localsGuide);
                         show(localsGuide, 0, 10);
                         searchMore.classList.remove('search-more-active')
                         break;
                    case '11-20':
                         hide(localsGuide);
                         show(localsGuide, 10, 20);
                         searchMore.classList.remove('search-more-active')
                         break;
                    case '21-30':
                        hide(localsGuide);
                        show(localsGuide, 20, 30);
                        searchMore.classList.remove('search-more-active')
                        break;
                    case '31-40':
                        hide(localsGuide);
                        show(localsGuide, 30, 40);
                        searchMore.classList.remove('search-more-active')
                        break;
                    case '41-50':
                        hide(localsGuide);
                        show(localsGuide, 40, 50);
                        searchMore.classList.remove('search-more-active')
                        break;
                    case 'All':
                        show(localsGuide, 0, 50);
                        searchMore.classList.remove('search-more-active')
                        break;
                 }
             })
           });
        } else {
            moreBtn.textContent = '...';
        }

    })

}


function hide(hideItem) {
    errorMessage.style.display = 'none';
    searchInput.value = '';
    xBtn.style.display = 'none';

    for(let i = 0; i < hideItem.length; i++){
        hideItem[i].style.display = 'none';
        
    }
}

function show(showItem, y, x) {
    for(let i = y; i < x; i++){
        showItem[i].style.display = 'block';
    }

    moreBtn.textContent = '...'
}
