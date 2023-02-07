window.addEventListener("scroll",function(){
    var left=document.getElementById("fleft1");
    var right=document.getElementById("fright1");
    var bottom=document.getElementById("fbottom1");
    if(window.pageYOffset>200){
       left.classList.add("fleft")
       left.classList.remove("bfleft")
       left.style.opacity= "1";
       bottom.classList.add("fbottom")
       bottom.classList.remove("bfbottom")
       bottom.style.opacity= "1";
       right.classList.add("fright")
       right.classList.remove("bfright")
       right.style.opacity= "1";
    }
    else if(window.pageYOffset<190){
        left.classList.remove("fleft")
        left.classList.add("bfleft")
        left.style. opacity= "0";
        bottom.classList.remove("fbottom")
        bottom.classList.add("bfbottom")
        bottom.style.opacity= "0";
        right.classList.remove("fright")
        right.classList.add("bfright")
        right.style.opacity= "0";
    }
})
window.addEventListener("scroll",function(){
    var left=document.getElementById("fleft2");
    var right=document.getElementById("fright2");
    var bottom=document.getElementById("fbottom2");
    if(window.pageYOffset>480){
        left.classList.add("fleft2")
        left.classList.remove("bfleft2")
        left.style.opacity= "1";
        bottom.classList.add("middle2")
        bottom.classList.remove("middle2")
        bottom.style.opacity= "1";
        right.classList.add("fright2")
        right.classList.remove("bfright2")
        right.style.opacity= "1";
    }
    else if(window.pageYOffset<470){
        left.classList.remove("fleft2")
        left.classList.add("bfleft2")
        left.style. opacity= "0";
        bottom.classList.remove("middle2")
        bottom.classList.add("middle2")
        bottom.style.opacity= "0";
        right.classList.remove("fright2")
        right.classList.add("bfright2")
        right.style.opacity= "0";
    }
})