let itemObj = {}
const getItemInfo = () => {
    let query = window.location.search;
    let id = new URLSearchParams(query);
    // url = `http://localhost:3000/cart`
    url = `https://decathlon-mock.herokuapp.com/fitness_essentials?${id}`
    fetch(url).then((data) => data.json()).then((data) => createElements(data))
}

const createElements = (data) => {

    itemObj = data[0];
    console.log(itemObj)
    document.getElementById('productImg').innerHTML = `<div class="imgBox"><img src="${data[0].img}"/></div>`
    document.getElementById('heading').innerHTML = `<p>FORCLAZ</p>
    <h2 style="font-weight: 800">${data[0].name}</h2>
    <p style="color:grey">Reference: 830060${data[0].id}</p>`
    document.querySelector('.price_con').innerHTML = `<span class="price">MRP ₹ ${data[0].current_price}</span>
    <span class="price-w">₹ ${data[0].mrp}</span>
    <div class="rating" style="height: 30px; width:100px">
        <div><span style="font-weight:bold">${data[0].rating}/5</span></div>
        <div class="star">★</div>
        <div><large class="ml-2">\ ${Math.floor(Math.random() * 1000)}</large></div>
    </div>
    <button type="button" class="review-btn btn btn-outline-secondary" id="addToCart" onclick="addToCart()">VIEW ALL REVIEW <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM0MjQ0NTMiPjxwYXRoIGQ9Im0xMi44NTMgMTYuMDkwNWMtLjA2ODg0NzcgMC0uMTM4MTg0LS4wMTQxODMtLjIwMzEyNS0uMDQzMDM4NGwtNC42MTgxNi0yLjA1NjA2LTQuNjE4MTYgMi4wNTYwNmMtLjE3MDg5OC4wNzU4MDY2LS4zNzAxMTcuMDQ5Mzk1Ni0uNTE1NjI1LS4wNjcwMDMzLS4xNDU5OTYtLjExNjg4OC0uMjE0MzU1LS4zMDU2Ny0uMTc3NzM0LS40ODkwNzJsMS4wMTg1NS01LjEwMjQ5LTMuNTYwNTUtMy41NjY4Yy0uMTMwMzcxLS4xMzA1ODItLjE3ODIyMy0uMzIyMjk5LS4xMjUtLjQ5OTM0My4wNTMyMjI3LS4xNzY1NTUuMTk5NzA3LS4zMDk1ODMuMzgwMzcxLS4zNDU3NzRsNS4xMDM1Mi0xLjAyMjY1IDIuMDM3Ni00LjU5MjM5Yy4xNjExMzMtLjM2MTkxMy43NTI5My0uMzYxOTEzLjkxNDA2MyAwbDIuMDM3NiA0LjU5MjM5IDUuMTAzNTIgMS4wMjI2NWMuMTgwNjY0LjAzNjE5MTUuMzI3MTQ4LjE2OTIxOS4zODAzNzEuMzQ1Nzc0LjA1MzIyMjcuMTc3MDQ0LjAwNTM3MTEuMzY4NzYxLS4xMjUuNDk5MzQzbC0zLjU2MDU1IDMuNTY2OCAxLjAxODU1IDUuMTAyNDljLjAzNjYyMTEuMTgzNDAyLS4wMzE3MzgzLjM3MjE4NC0uMTc3NzM0LjQ4OTA3Mi0uMDkwMzMyMS4wNzIzODMtLjIwMTE3Mi4xMTAwNDItLjMxMjUuMTEwMDQyem0tNC44MjEyOS0zLjE0ODE2Yy4wNjkzMzU5IDAgLjEzODY3Mi4wMTQxODMuMjAzMTI1LjA0MzAzODRsMy45Mzg0OCAxLjc1MzgxLS44ODE4MzYtNC40MTY4MWMtLjAzMjcxNDgtLjE2NDMyOC4wMTg1NTQ3LS4zMzQwMzYuMTM2NzE5LS40NTIzOTJsMy4wODkzNi0zLjA5NDM2LTQuNDQwOTItLjg5MDExMWMtLjE1OTE4LS4wMzE3ODk5LS4yOTI5NjktLjEzODg5Ny0uMzU4ODg3LS4yODc1NzVsLTEuNjg2MDQtMy43OTk2LTEuNjg2MDQgMy43OTk2Yy0uMDY1OTE4LjE0ODY3OC0uMTk5NzA3LjI1NTc4NS0uMzU4ODg3LjI4NzU3NWwtNC40NDA5Mi44OTAxMTEgMy4wODkzNiAzLjA5NDM2Yy4xMTgxNjQuMTE4MzU2LjE2OTQzNC4yODgwNjQuMTM2NzE5LjQ1MjM5MmwtLjg4MTgzNiA0LjQxNjgxIDMuOTM4NDgtMS43NTM4MWMuMDY0NDUzLS4wMjg4NTUzLjEzMzc4OS0uMDQzMDM4NC4yMDMxMjUtLjA0MzAzODR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjAzMiAtLjA5KSIvPjwvc3ZnPg==" alt="Rating"></button>`
}

// const goToCartModal = () => {

// }

const postData = (obj) => {
    let url = "https://decathlon-mock.herokuapp.com/cart";
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(obj);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://decathlon-mock.herokuapp.com/cart", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
} 

const goBack = () => {
    window.location.href = './fitnessEssentials.html'
}

const goToCart = (id) => {
    url ="./orderedCart.html"
    url += `?id=${id}`
    window.location.href = url
}

const gotoSamePage = () => {
    location.reload()
}

const showModal = () => {
    document.querySelector('.orderModal').style.display = 'block'
    document.querySelector('.pageBody').style.opacity = '0.3';


    document.querySelector('.orderSection').innerHTML = `
<div class="itemsSection">
    <div class="successMsg">
        <p><i style="color:green; font-size:22px" class="fas fa-check-circle"></i>    <strong style="font-size:22px; font-weight:900">Item added to cart!</strong></p>
    </div>
    <div class="items">
        <div class="closeBtn">
        <button onclick="gotoSamePage()">X</button>
        </div>
        <div class="itemImg">
            <img src="${itemObj.img}"/>
        </div>
        <div class= "itemDesc">
            <div class="itemDescName">
                <p>${itemObj.name}</p>
            </div>
            <div>
                <div><span style="font-weight:bold">${itemObj.rating}/5</span></div>
                </div>
            <div class="itemOrderDetail">
                <p>Size: <strong>${itemObj.size.toUpperCase()}</strong></p>
            </div>
            <div>
                <p>Price: <strong>₹ ${itemObj.current_price}</strong></p>
            </div>
        </div>
        <div class="buttonContainer">
            <div>
                <button class="whiteBtn" onclick="goBack()">Continue Shopping</button>
            </div>
            <div>
                <button class="blueBtn" onclick="goToCart(${itemObj.id})">Go to Cart</button>
            </div>
        </div>
    </div>
    <div>
    <p style="font-size:22px; font-weight:700 ">Frequently Bought Together</p>
    </div>
    <div class="productsCard" id="productsCard">
    ${showSuggestion()}
    </div>
</div> `
}



const addToCart = () => {
    let size = document.getElementById('sizeSelect').value;
    itemObj.size = size;
    itemObj.qty = 1;
    postData(itemObj)
    // console.log(itemObj)
    showModal()
    
}

const changePin = () => {
    console.log('pin')
    document.querySelector('.modal').style.display ='block'
    document.querySelector('.pageBody').style.opacity ='0.3'
    // url = ``
    // document.getElementById('pin').innerHTML = `Delivering to <strong>752101 Bhubaneswar</strong>`
}
const getPin= () => {
    enteredPin = document.getElementById('pincode').value;
    document.querySelector('.modal').style.display ='none'
    document.querySelector('.pageBody').style.opacity ='1'
    url = `https://api.postalpincode.in/pincode/${enteredPin}`
    fetch(url).then((data) => data.json()).then((data) => {
        document.getElementById('pin').innerHTML = `Delivering to <strong>${enteredPin} ${data[0].PostOffice[0].District}</strong>`
        document.querySelector('.pincode').innerHTML= `${enteredPin}<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi42NDIiIGhlaWdodD0iOS4wMjMiIHZpZXdCb3g9IjAgMCAxMi42NDIgOS4wMjMiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmY7c3Ryb2tlOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNTA1IDAuNTUzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTEuNC4xMjFhLjM4Ni4zODYsMCwwLDAtLjU0NCwwTDMuOTMxLDcuMDQ3LjYsMy43MmEuMzg2LjM4NiwwLDEsMC0uNTQ0LjU0NmwzLjYsMy42YS4zODkuMzg5LDAsMCwwLC41NDYsMGw3LjItNy4yYS4zODYuMzg2LDAsMCwwLDAtLjU0NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDcgLTAuMDA4KSIvPjwvZz48L2c+PC9zdmc+" class="img-fluid" alt="Success">
        <button type="button" class="ml-auto btn btn-link" onclick="changePin()">CHANGE</button>`
    })
}

document.getElementById('pinBlue').addEventListener('click', getPin)
document.getElementById('cartBtn').addEventListener('click', addToCart)
window.addEventListener('load', getItemInfo)

const createSuggestionElements = (data) => {
    let displayElement=document.getElementById("productsCard");
    let output="";
    for(i in data){
        output+=`
        <div id="${data[i].id}" class="cardCover">
            <div class="cardImgCover">
                <a href="./pro.html?id=${data[i].id}"><img src="${data[i].img}" alt="${data[i].name}"></a>
            </div>
            <div class="cardDataCover">
                <div class="priceElement">
                    <div>Rs ${data[i].current_price}</div>
                    <div>MRP  Rs${data[i].mrp}</div>
                </div>
                <div>${data[i].name}</div>
                <div>
                    <div>${data[i].rating}/5    <span class="fa fa-star checked"></span></div>
                </div>
            </div>
        </div>
        `
    }
    displayElement.innerHTML=output;
    let cards=document.getElementsByClassName('cardCover');
    [...cards].forEach(el=>{
        el.addEventListener('click',function(){
            redirectToPlaceOrder(data);
        })
    })
}

// $( ".cardCover" ).click(function() {
//     let id = event.id
//     console.log(id)
//   });
const showSuggestion = () => {
   url = `https://decathlon-mock.herokuapp.com/fitness_essentials?q=${itemObj.current_price}`
   fetch(url).then((data) => data.json()).then((data) => createSuggestionElements(data))
}
