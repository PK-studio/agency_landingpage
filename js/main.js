$('.portfolio-item').hover( function(){
$.each(this, function(e,t){
    $(t).hover( handlerIn, handlerOut )
    console.log(t)
})

})

function handlerIn() {$('.portfolio-itemtext').fadeIn()}
function handlerOut() {$('.portfolio-itemtext').fadeOut()}