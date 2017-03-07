// SMOUTH SCROLL PAGE
$(function() {  

    jQuery.scrollSpeed(120,800);

});

(function($) {
    
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0, 
            scroll = false,
            scrollY,
            scrollX,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);




//NAVIGATION
    var changenavigation = $('#top').offset().top + 100;
	TweenLite.to($(".navbar-default"), 0.2, {"min-height": "100px"})
	TweenLite.to($("#logo"), 0.2, {height: "60px", "padding-bottom": "5px"})

$(window).on('scroll',function(){
	stop = Math.round($(window).scrollTop());
	if (stop >= changenavigation) {
		// $('.navbar').addClass('navbar-inverse');
        TweenLite.to($(".navbar-default"), 0.2, {"min-height": "60px"})
        TweenLite.to($("#logo"), 0.2, {height: "40px", "padding-bottom": "0px"})
	} else {
		TweenLite.to($(".navbar-default"), 0.2, {"min-height": "100px"})
		TweenLite.to($("#logo"), 0.2, {height: "60px", "padding-bottom": "5px"})
   }
});	


//Header Animation
var header = $(".text-vertical-center").children();
var tl = new TimelineLite();
    tl.from(header[0], 2, {delay: 0.4, ease: Elastic.easeOut.config(1, 0.3), opacity: 0, scale: 0, y: 80})
        .to(header[0], 1, {delay: 2,ease: Power3.easeIn, opacity: 0, scale: 0})
        .from(header[1], 2, {delay: 0.4, ease: Elastic.easeOut.config(1, 0.3), opacity: 0, scale: 0, y: 80})
// Change section color
$(".media").on(
{
    mouseenter: function() 
    {
        $(this).children().css("color","#27a41a")
    }, 
    mouseleave: function()
    {
       $(this).children().css("color","black")
    }
});

// Quote Slider
window.setInterval(slideQuote,5000);
var myQuotes = [
    '<div id="1" class="quoteBox"><h3> The GreenSock animation platform is one of the most useful sets of tools in existence when it comes to web animation. </h3><h4>- P.James Clarck</h4></div>',
    '<div id="2" class="quoteBox"><h3> The GreenSock animation platform is one of the most useful sets of tools in existence when it comes to web animation. </h3><h4>- P.Clarck</h4></div>',
    '<div id="3" class="quoteBox"><h3> The GreenSock animation platform is one of the most useful sets of tools in existence when it comes to web animation. </h3><h4>- James Clarck</h4></div>'
    ] 
var currentQuote = 1;
$(".quote").html(myQuotes[0]);
function slideQuote(){
    currentQuote++;
    if (currentQuote>myQuotes.length){currentQuote=1;}
    $(".quote div").hide().html(myQuotes[currentQuote]).fadeIn("slow");
}

//COURSE
$(".signup").hide();
var btn = $(".btn-primary")
var arrBtn = [].slice.call(btn)
arrBtn.forEach(function (element){
     var course=$(element).attr("data-course");
     $(element).on("click", function(){
         console.log(course)
         $(".signup").fadeIn(600)
     })
})
