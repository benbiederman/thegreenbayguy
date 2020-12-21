function search() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const localsGuide = document.querySelectorAll('.lg');


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

