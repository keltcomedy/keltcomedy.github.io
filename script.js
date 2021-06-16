//defining const - variable cannot be redifined or updated; query selector selects the id of btnHamburger
const btnHamburger = document.querySelector('#btnHamburger');
const headerMobile = document.querySelector('.header__mobile')
//addEventListener - on click it runs the funtion. if btnHamburger element's classlist has open class, then it will remove, else it will add. So this triggers the on off loop for mobile menu.

btnHamburger.addEventListener('click', function() {
    console.log('click hamburger');

    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');       
        headerMobile.classList.remove('open');       
    }

    else {
        btnHamburger.classList.add('open')
        headerMobile.classList.add('open');
    }
    
});

headerMobile.addEventListener('click', function() {
    console.log('link clicked');

    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');       
        headerMobile.classList.remove('open');       
    }

    
});




