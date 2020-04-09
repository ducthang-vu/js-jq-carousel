console.log('main.js is working')
console.log($)



// FUNCTIONS 
function goNext() {
    var currentActive = $('.img-box.active')
        currentActive.removeClass('active')
        if (currentActive.hasClass('first')) {
            $('.img-box.last').addClass('active')
        }
        else {
            currentActive.prev().addClass('active')
        }
}


function goBack() {
    var currentActive = $('.img-box.active')
    currentActive.removeClass('active')
    if (currentActive.hasClass('last')) {
        $('.img-box.first').addClass('active')
    }
    else {
        currentActive.next().addClass('active')
    } 
}


// GLOBAL VARIABLES
const prev_btn = $('#prev-button')
const next_btn = $('#next-button')
const img_boxes = $('.img-box')

// EVENTS
$(document).ready (function() {
    prev_btn.click(goNext)
    next_btn.click(goBack)
})



/*
function next_circular (lenght, index, leap=1) {
    return (index % lenght) + leap - 1
}


const test = [
    [next_circular(5, 4), 0],
    [next_circular(5, 3), 4],
    [next_circular(5, 4, -1), 3],
    [next_circular(5, 3, -1), 2]
]

console.table(test) 
*/