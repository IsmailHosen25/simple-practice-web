window.addEventListener("scroll",function(){
    var div1=document.getElementById("forscroll1");
    if(window.pageYOffset>200){
       div1.classList.add("haha")
       div1.classList.remove("haha2")
       div1.style. opacity= "1";
    }
    else if(window.pageYOffset<190){
        div1.classList.remove("haha")
        div1.classList.add("haha2")
        div1.style. opacity= "0";
    }
})
window.addEventListener("scroll",function(){
    var div2=document.getElementById("forscroll2");
    if(window.pageYOffset>480){
       div2.classList.add("haha");
       div2.classList.remove("haha2")
       div2.style. opacity= "1";
    }
    else if(window.pageYOffset<470){
       div2.classList.add("haha2")
        div2.classList.remove("haha")
        div2.style. opacity= "0";
    }
})