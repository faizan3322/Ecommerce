let newsBtn=document.querySelector('#newsBtn');
let Email = document.querySelector('#email');
 newsBtn.addEventListener('click',()=>{
    if(Email.value){
     alert("You've Successfully Subscribe")
    }
    else{
        alert("Please Enter Your Email");
    }
 })

 let cart=document.querySelector('#cart');
 let shopping = document.querySelector('#shopping');

 cart.addEventListener('click',()=>{
    let count =1;
    shopping.document.write(count);
    console.log(count)
    count++;
 })

