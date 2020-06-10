window.onload=function(){
  //轮播图代码
 
 var swiperr = new Swiper('.swiper-container', {
   spaceBetween: 9,
   centeredSlides: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
     color:"red",
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   
 });

// index页面回到顶部
 var  btnn=document.querySelector(".dingbu");
 var screenTop=null, te=null; 
 window.onscroll = function(){
   screenTop = document.documentElement.scrollTop;
   if(screenTop>0 ){
     btnn.style.display="block";
   }else{
     
     btnn.style.display="none";
     
   }
      btnn.onclick=function(){
       
         clearInterval(te);
         te=setInterval(function( ){
         screenTop=screenTop-50;
         window.scrollTo(0,screenTop);
         if(screenTop<=0 ){
               clearInterval(te);
         }
           
         },20);
        
      }
   
 }





}