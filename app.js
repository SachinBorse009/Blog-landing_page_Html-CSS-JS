const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const card = document.querySelector('.card_wrapper')
const blogbtn = document.querySelector('#blog')
const blogPage = document.querySelector('#main-blog')

// scroll function
leftArrow.addEventListener('click', () => {
    // console.log('click')
    card.scrollLeft -= 300;
})

rightArrow.addEventListener('click', () => {
    // console.log('click')
    card.scrollLeft += 300;
})

// page scroll
blogbtn.addEventListener('click' , () => {
    console.log('click')
    blogPage.scrollIntoView({behavior:"smooth", block:"center"});
})
