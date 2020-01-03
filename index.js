function slide02() {
    let background = document.querySelector('.container');
    if (background.className=='container'){
        background.classList.add("slide02")
    } else {
        background.classList.replace("slide01", "slide02")
    }
    
}

function slide01() {
    let background = document.querySelector('.container');
    background.classList.replace("slide02", "slide01")
    console.log('teste1');

}

