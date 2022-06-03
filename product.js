let productNames = ["Thomas Hill Ordinary 1983", "George Strait 2002", "Meghan Patrik 2003"]
let prices = [100,120,110]

var data1=0;
document.getElementById("root").innerText=data1;

function decrement(e) {
    data1=data1-1;
    console.log(e)
    document.getElementById("root").innerText=data1;
}


function increment(){
    data1=data1+1;
    document.getElementById("root").innerText=data1;
}


var data2=0;
document.getElementById("root2").innerText=data2;

function decrement2() {
    data2=data2-1;
    document.getElementById("root2").innerText=data2;
}


function increment2(){
    data2=data2+1;
    document.getElementById("root2").innerText=data2;
}


var data3=0;
document.getElementById("root3").innerText=data3;

function decrement3() {
    data3=data3-1;
    document.getElementById("root3").innerText=data3;
}


function increment3(){
    data3=data3+1;
    document.getElementById("root3").innerText=data3;
}

document.querySelectorAll('.buynow-button').forEach((el)=> {
    el.addEventListener("click",addToCart)
})


let dataArr;
function addToCart(e){
    dataArr = [data1, data2, data3];
    let item = e.target.parentElement.className;
    console.log(`${dataArr[item-1]}`);
    renderCart(dataArr[item-1],productNames[item-1],item);
    calTotal(dataArr)

}

function renderCart(count,product,item){
    let para = '';
    if (count>0){
        para =`${product} ▶ ${count}`
        document.querySelector(`.item${item}`).innerText = para

    }
    else{
        document.querySelector(`.item${item}`).innerText = ''
    }
}

let value = 0
function calTotal(dataArr){
    
    for (i=0; i<productNames.length; i++){
        value = value + (dataArr[i] * prices[i])
    }
    document.querySelector('.prices').innerHTML= value
    
}

document.getElementById('place').addEventListener("click",order);
function order(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if (name !="" && email !="" && value>0 ){
        displayInvoice()
    }
    else{
        if (name==""){
            alert("Enter the name")
        }
        if (email==""){
            alert("Enter the email")
        }
        if (value <= 0){
            alert("Please select atleast one product")
        }
    }
}

function displayInvoice(){
    let para = "";
    document.querySelector('.invoiceName').innerText= "Name: " + document.getElementById('name').value;
    document.querySelector('.invoiceMail').innerText = "Email: " +  document.getElementById('email').value;
    document.querySelector('.allProducts').style.display = 'none';
    document.querySelector('.invoice').style.display ='block';
    dataArr.forEach((el,index)=>{
        if (el>0){
            para = para + `<h3> ${productNames[index]} </h3> <p>Product Quantity: ${el} </p> <p> $ ${prices[index]* el}</p>`
        }
        document.querySelector('.productDetails').innerHTML=  para;

    })
    document.querySelector('.totalPrice').innerHTML= `Total Bill $${value}`

}