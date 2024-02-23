var lastScrollTop = 0
var firstSection = window.innerHeight
var header = $('#navbar')

$(window).scroll(function (event) {
    var currentScroll = $(this).scrollTop()

    if(currentScroll < firstSection){
        header.removeClass('dark')
    }

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.slideUp()
    } else {
        // Scrolling up
        if(currentScroll > firstSection){
            header.slideDown() // Show header
            header.addClass('dark')
        }else{
            header.slideDown() // Show header
        }
    }

    lastScrollTop = currentScroll
});

$('#hamburger').click(function(){
    $(this).toggleClass('ham-open')
    $('.ham-menu').toggleClass('menu-open')

    $(window).scroll(function (event) {
        $('#hamburger').removeClass('ham-open')
        $('.ham-menu').removeClass('menu-open')
    })
})