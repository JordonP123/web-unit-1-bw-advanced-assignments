//The BUTTONS
const locationButtonArr = Array.from(document.querySelectorAll('.button'));

//close tab button
const closeTab = document.querySelector('.close-modal');

//modal container
//not visible
const theModalHidden = document.querySelector('.modal-container');

//Pops up the modal when button is clicked
function HOF(modal,exit){
    locationButtonArr.forEach(item => {
    item.addEventListener('click', modal);
    closeTab.addEventListener('click', exit);
        }
    )
};

//different cbs for different animations...fix this later. 
function cbModal() {
    theModalHidden.classList.add('modal-container-active-1');
};

function cbExit() {
    theModalHidden.classList.remove('modal-container-active-1');
};

function cbModal2() {
    theModalHidden.classList.add('modal-container-active-2');
};

function cbExit2() {
    theModalHidden.classList.remove('modal-container-active-2');
};


function cbModal3() {
    theModalHidden.classList.add('modal-container-active-3');
};

function cbExit3() {
    theModalHidden.classList.remove('modal-container-active-3');
};


function cbModal4() {
    theModalHidden.classList.add('modal-container-active-4');
};

function cbExit4() {
    theModalHidden.classList.remove('modal-container-active-4');
};


function cbModal5() {
    theModalHidden.classList.add('modal-container-active-5');
};

function cbExit5() {
    theModalHidden.classList.remove('modal-container-active-5');
};


function cbModal6() {
    theModalHidden.classList.add('modal-container-active-6');
};

function cbExit6() {
    theModalHidden.classList.remove('modal-container-active-6');
};


function cbModal7() {
    theModalHidden.classList.add('modal-container-active-7');
};

function cbExit7() {
    theModalHidden.classList.remove('modal-container-active-7');
};


HOF(cbModal,cbExit);
HOF(cbModal2,cbExit2);
HOF(cbModal3,cbExit3);
HOF(cbModal4,cbExit4);
HOF(cbModal5,cbExit5);
HOF(cbModal6,cbExit6);
HOF(cbModal7,cbExit7);