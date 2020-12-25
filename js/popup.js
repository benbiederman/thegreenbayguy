const moreInfoBtn = document.querySelector('.open');
const popup = document.querySelector('.lg-popup');
const close = document.querySelector('.close');
const popupBackground = document.querySelector('.popup');


moreInfoBtn.addEventListener('click', e => {
    e.preventDefault();
    popup.style.display = 'block';
    popup.style.position = 'sticky';
    popupBackground.style.display = 'block';
    popupBackground.style.position = 'sticky';
    popup.style.animation = `popupFade 0.5s ease forwards`;
    document.body.style.overflowY = 'hidden';
})

close.addEventListener('click', e => {
    e.preventDefault();
    popup.style.display = 'none';
    popupBackground.style.display = 'none';
    document.body.style.overflowY = 'auto';
})

