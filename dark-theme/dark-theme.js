// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on
const changeColor = document.querySelector('.container');
const toggleOn = document.querySelector('.button');

toggleOn.addEventListener('click', function(){
    changeColor.classList.toggle('change');
});



