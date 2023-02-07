// it is a button

var maincart=document.getElementById("maincart");

maincart.addEventListener("click",()=>{
  var displaycart=document.getElementById("cart")
  displaycart.classList.toggle("hello")
})

// button end


var root =document.getElementById("root")
var cartitems =document.getElementById("cartitem")
var pcount=document.getElementById("count");
var totalm=document.getElementById("total")
function renderProducts(){
  product.forEach((items)=>{
    root.innerHTML+=`
     <div class="box">
       <div class="img-box">
          <img class="img" src=${items.img}></img>
       </div>
      <div class="bottom">
         <p>${items.title}</p>
         <h2>$ ${items.price}.00</h2>
         <button onclick='addtocart(${items.id})'>Add to Cart</button>
      </div>
      </div> 
      `
  });
}
renderProducts()
    
let cart=[]
function addtocart(id){
  if(cart.some((item)=>item.id===id)){
    alert("Product already in cart")
  }
  else{
    const item= product.find((items)=> items.id===id)
    cart.push(item)
  }
updatecart()
 
}
function updatecart(){
  rendercartitems()
  rendersubtotal()
}

function rendercartitems(){
  cartitems.innerHTML="";
  cart.forEach((items)=>{
    cartitems.innerHTML += `
    <div class="cart-itmes">
      <div class="row-img">
         <img src=${items.img} alt="image is not found">
      </div>
      <div class="right">
        <p>${items.title}</p>
        <h2>${items.price}.00</h2>
        <i class='fa-solid fa-trash' onclick='deleteElement(${items.id})'></i>
      </div>
   </div>
   `
  })
  pcount.innerHTML=cart.length;
}
function rendersubtotal(){
  let totalprice=0;//totalitems=0;
  cart.forEach((items)=>{
    totalprice += items.price;
    //totalprice+=items.price*totalitems
  })
  totalm.innerHTML=totalprice;
}
function deleteElement(id){
  cart=cart.filter((item)=>item.id !== id)
  updatecart()
}