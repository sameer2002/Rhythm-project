$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$('#owl-slide1').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    startPosition:0,
    autoplay:true,
    animateOut:'fadeOut',
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#owl-slide2,#owl-slide3').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    startPosition:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#owl-slide4').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    margin:0,
    startPosition:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:3
        },
        500:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

//nav bg color
if($(window).innerWidth() > 500){
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $(".nav").css({"background-color":"#111"});   
        }
        else{
            $(".nav").css({"background-color":"transparent"});
        }
    })
});
}
else{
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 150){
                $(".nav-bar").css({"background-color":"#111"});   
            }
            else{
                $(".nav-bar").css({"background-color":"transparent"});
            }
        })
    });
}
var x =document.querySelector('.owl-slide1 .active')
var n =document.querySelector('.owl-slide1 .owl-nav button.owl-next')
var p =document.querySelector('.owl-slide1 .owl-nav button.oel-prev')

/*slider();
function slider() {
    for(var i=0;i <4;i++){
        if(i==0){
            n.addEventListener("mouseover", function() {
                n.style.backgroundImage = "url(./assets/images/section-bg-19.jpg)";
            }, false);
            n.addEventListener("mouseout", function() {
                n.style.backgroundImage = "";
            }, false);
        }
        else if(i==1){
            n.addEventListener("mouseover", function() {
                n.style.backgroundImage = "url(./assets/images/section-bg-20.jpg)";
            }, false);
            n.addEventListener("mouseout", function() {
                n.style.backgroundImage = "";
            }, false);
        }
        else if(i==2){
            n.addEventListener("mouseover", function() {
                n.style.backgroundImage = "url(./assets/images/section-bg-18.jpg)";
            }, false);
            n.addEventListener("mouseout", function() {
                n.style.backgroundImage = "";
            }, false);
        }
        else if(i==3){
            n.addEventListener("mouseover", function() {
                n.style.backgroundImage = "url(./assets/images/section-bg-20.jpg)";
            }, false);
            n.addEventListener("mouseout", function() {
                n.style.backgroundImage = "";
            }, false);
        }
    }setTimeout(slider,2000);
}*/

//open navigation bar
slider=document.querySelector(".nav .menu")
but=document.querySelector(".nav .ham i")
function openNav() {
    if(slider.style.opacity=="0"){
        slider.style.height = "auto";
        slider.style.opacity="1";
    }
    else{
        slider.style.height = "1";
        slider.style.opacity="0";
    }
}
