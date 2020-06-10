/*
 * @Date         : 2020-04-28 10:09:57
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-04-30 16:46:15
 * @FilePath     : \03waimao\js\com.js
 */


 var mailbox,detainment,detainment1,detainment2,bye1;
 var clickli,clicklia;

 var pop1,pop2;
 var clickli,clicklia;

//点击关闭按钮关闭Inquiry
function closeInquiry(){
    
     bye1.onclick=function(){
      pop.style.display="none";
     }
  
}






//导航栏切换
function clicklinav (){
  for (let i=0;i<clickli.length;i++) {
    clicklia[i].onclick=function(){
      for (let j=0;j<clicklia.length;j++) {//第一层循环 控制全部的样式
         clicklia[j].className=""; 
       }
    //  //第二次循环控制点击的样式
    clicklia[i].className="a-default"; 
    }
   }

}
  window.addEventListener("load",function(){
       
         mailbox =document.querySelector(".email-us");
      
     
         pop1=document.querySelector("#pop1");
         pop2=document.querySelector("#pop2");


//导航栏伪类的切换
    clickli=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li");
     clicklia=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li a ");
  clicklinav ()

  // 监听鼠标事件
  addEvent()






  
     
    }, false);


function addEvent() {
  document.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    if(pop2.classList.contains('hidden')){
      if (x >= document.body.offsetWidth-2 || x<= 2 ||y <=6 || y>=document.body.offsetHeight-2){
        // console.log(y)
        openStay(pop2)
      }
    }
    
  }
}


    var closeStay = function(){
      hide(pop2)
    }
    var closeInput = function(){
      hide(pop1)
    }
    var openInput = function(){
      show(pop1)
    }
    var openStay = function(){
      show(pop2)
    }
    var hide = function(e){
      e.classList.add('hidden')
    }
    var show = function(e){
      e.classList.remove('hidden')
    }
