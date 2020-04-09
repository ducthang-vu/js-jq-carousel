$(document).ready (function() {

    console.log('main.js is working')
    console.log($)


    /***************/
    /*  FUNCTIONS  */
    /***************/

    function goNext() {
        var currentActive = $('.img-box.active')
            currentActive.removeClass('active')
            if (currentActive.hasClass('first')) {
                $('.img-box.last').addClass('active')
                $(rad_inputs[$('.img-box.last').attr('value')]).prop("checked", true)
            }
            else {
                currentActive.prev().addClass('active')
                $(rad_inputs[currentActive.prev().attr('value')]).prop("checked", true)
            }
    }


    function goBack() {
        var currentActive = $('.img-box.active')
        currentActive.removeClass('active')
        if (currentActive.hasClass('last')) {
            $('.img-box.first').addClass('active')
            $(rad_inputs[$('.img-box.first').attr('value')]).prop("checked", true)
        }
        else {
            currentActive.next().addClass('active')
            $(rad_inputs[currentActive.next().attr('value')]).prop("checked", true)
        } 
    }


    function keyboard(e) {
        switch (e.keyCode) {
            case 37:
                goBack()
                break
            case 39:
                goNext()
                break
        }
    }


    function controller() {
        $('.img-box.active').removeClass('active')
        $(img_boxes[$(this).attr('value')]).addClass('active')
    }


    /***************/
    /* MAIN SCRIPT */
    /***************/

    /* GLOBAL VARIABLES */
    const rad_inputs = $('.regular-radio')
    const prev_btn = $('#prev-button')
    const next_btn = $('#next-button')
    const img_boxes = $('.img-box')
    

    /* EVENTS */
    // Buttons
    prev_btn.click(goNext)
    next_btn.click(goBack)

    // Keyboard
    $(document).keydown(keyboard)

    // Controller
    $('.controller label').click(controller)
})
