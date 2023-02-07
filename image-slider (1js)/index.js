function next(){
  count++;
  if(count>=photos.length){
    count=0;
    imagtag.src =photos[count];
  }
  else{
    imagtag.src =photos[count];
  }
}
function prev(){
     count=count-1;
     if (count<0){
        count=3;
        imagtag.src =photos[count];
     }
     else{
        imagtag.src=photos[count];
     }
}
count=0;
var photos=["image/i1.png","image/i2.jpg","image/i3.jpg","image/i4.webp"];
var imagtag=document.querySelector("img");