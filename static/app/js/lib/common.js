$(document).ready(function() {
   /* $('#matchpnl').carouFredSel({
        responsive : true,
        width : '100%',
        auto : false,
        prev : '#prev',
        next : '#next',
        auto : false,
        mousewheel : true,
        swipe : {
            onMouse : true,
            onTouch : true
        },
        items : {
            visible : {
                min : 2,
                max : 9
            }
        }
    });*/

    $('#listitem').carouFredSel({
        responsive : true,
        width : '100%',
        auto : false,
        prev : '#prev1',
        next : '#next1',
        auto : false,
        mousewheel : true,
        swipe : {
            onMouse : true,
            onTouch : true
        },
        items : {
            visible : {
                min : 0,
                max : 9
            }
        }
    });

    $('.slide-handle, .close-slideout, .bottom_close').click(function() {
    	if(location.href.indexOf("recommendations") != -1 || $('.slide-handle').hasClass('rotate')){
            $('#slide-out').slideToggle('slow');
            $('.slideout_arrow a').toggleClass('rotate');    		
    	}
    });
});