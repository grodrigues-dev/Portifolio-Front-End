function slide02() {
    let background = document.querySelector('.container');
    let btnNext = document.querySelector('#btnNext');
    let btnPrevious = document.querySelector('#btnPrevious');
    if (background.className=='container'){
        background.classList.add("slide02")
    } else {
        background.classList.replace("slide01", "slide02")        
    }   
    btnNext.classList.add("active"); 
    btnPrevious.classList.remove("active")
}

function slide01() {
    let background = document.querySelector('.container');
    let btnNext = document.querySelector('#btnNext');
    let btnPrevious = document.querySelector('#btnPrevious');
    background.classList.replace("slide02", "slide01");
    btnPrevious.classList.add("active"); 
    btnNext.classList.remove("active");
}

