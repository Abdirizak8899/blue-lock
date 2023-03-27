let menue = document.querySelector('.bx.bx-menu');
let navBar = document.querySelector('header nav')
menue.addEventListener('click',()=>{
    if (menue.classList.contains('bx-menu')){
        menue.classList.replace('bx-menu','bx-x')
    }else if(menue.classList.contains('bx-x')){
        menue.classList.replace('bx-x','bx-menu')
    }

    navBar.classList.toggle('hide')
});


// let baseUrl = 'https://api.jikan.moe/v4/characters/Blue_Lock'
// fetch(baseUrl)
// .then(res => res.json())
// .then(data =>{
//     console.log(data)
// })


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });