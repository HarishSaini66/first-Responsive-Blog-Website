togglecollapse = document.querySelector('.toggle-collapse');
nav = document.querySelector('.nav');
navitem = document.querySelector('.nav-items');
social = document.querySelector('.social');

togglecollapse.addEventListener('click',()=>{
    social.classList.toggle('v-class-resp');
    navitem.classList.toggle('v-class-resp');
    nav.classList.toggle('h-nav-resp');

});


