// let quantity = 1;
let totalAmt = 0;

const queryFun = () => {
    let query = window.location.search;
    let id = new URLSearchParams(query)
    return id
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
    })
}
const loadCartData = () => {
    // changePin()
    url = `http://localhost:3000/cart`
    console.log(url)
    fetch(url).then((data) => data.json()).then((data) => createCart(data))
}

const shippingOffer = (data) => {
 
}

const deleteCartItem = (id) => {
    url = `http://localhost:3000/cart/${id}`;
    fetch(url, {method: 'DELETE'}).then(res => res.text()).then(res => console.log(res))
}

const plus = (id) => {
    let qty = +document.getElementById(id).textContent
    document.getElementById(id).textContent = ++qty
    updateCart(id, qty)
}

const minus = (id) => {
    let qty = +document.getElementById(id).textContent
    document.getElementById(id).textContent = --qty

    if(qty==0) {
        deleteCartItem(id)
    } 
    else{
        updateCart(id, qty)
    }
}
const createCart = (data) => {
    if(data.length == 0) {
        window.location.href = './pro.html'
    }
    for(i in data){
        quantity = data[i].qty
        let html = `
<div class="orderItemSection">
    <div class="orderItemImg">
        <img src="${data[i].img}"/>
    </div>
    <div class="orderItemDesc">
        <div class="orderLine1">
            <p class="orderItemName">${data[i].name}</p>
            <button onclick="deleteCartItem(${data[i].id})"><span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy43MjciIGhlaWdodD0iMTkuMjE4IiB2aWV3Qm94PSIwIDAgMTMuNzI3IDE5LjIxOCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzQyNDU1MztvcGFjaXR5OjAuNTt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0uNjg3LDE5LjIxOEEuNjg2LjY4NiwwLDAsMSwwLDE4LjUzMlY2LjE3OGEuNjg2LjY4NiwwLDEsMSwxLjM3MywwVjE3Ljg0NUgxMi4zNTRWNi4xNzhhLjY4Ni42ODYsMCwxLDEsMS4zNzIsMFYxOC41MzJhLjY4Ni42ODYsMCwwLDEtLjY4Ni42ODZabTIuNzQ1LTQuOFY3LjU1YS42ODYuNjg2LDAsMSwxLDEuMzczLDB2Ni44NjNhLjY4Ni42ODYsMCwxLDEtMS4zNzMsMFptMi43NDYtMS4zNzNWNy41NWEuNjg2LjY4NiwwLDEsMSwxLjM3MiwwdjUuNDkxYS42ODYuNjg2LDAsMCwxLTEuMzcyLDBabTIuNzQ1LTEuMzczVjcuNTVhLjY4Ni42ODYsMCwxLDEsMS4zNzMsMHY0LjExOGEuNjg2LjY4NiwwLDAsMS0xLjM3MywwWm0tLjY4Ny03LjU1SC42ODdhLjY4Ny42ODcsMCwxLDEsMC0xLjM3M0g0LjhWLjY4N0EuNjg3LjY4NywwLDAsMSw1LjQ5MSwwSDguMjM2YS42ODYuNjg2LDAsMCwxLC42ODcuNjg3VjIuNzQ1aDQuMTE4YS42ODcuNjg3LDAsMCwxLDAsMS4zNzNaTTYuMTc4LDIuNzQ1SDcuNTVWMS4zNzNINi4xNzhaIi8+PC9zdmc+"/></span></button>
        </div>
        <div class="orderLine2">
            <div class="rating">
                <p style="font-weight:600; font-size:14px">${data[i].rating} <span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4zMTYiIGhlaWdodD0iMjMuMTI2IiB2aWV3Qm94PSIwIDAgMjQuMzE2IDIzLjEyNiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZkYjY1ZDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMi4xNTgsMS4zMThsMy43NTcsNy42MTMsOC40LDEuMjIxLTYuMDc5LDUuOTI1LDEuNDM1LDguMzY3LTcuNTE0LTMuOTUtNy41MTQsMy45NSwxLjQzNS04LjM2N0wwLDEwLjE1Miw4LjQsOC45MzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xLjMxOCkiLz48L3N2Zz4="/></span></p>
            </div>
            <div class="size">
                <p>Size: <strong>${data[i].size.toUpperCase()}</strong></p>
            </div>
        </div>
        <div class="orderItemQtyPrice" >
            <div class="orderItemQty">
                <p>Qty</p>
                <button class="minusBtn" onclick="minus(${data[i].id})">-</button>
                <div><p class="quantity" id='${data[i].id}'>${quantity}</p></div>
                <button class="addBtn" onclick="plus(${data[i].id})">+</button>
            </div>
            <div class="orderValue">
                <p>₹ ${data[i].current_price * quantity}</p>
            </div>
            
        </div>              
    </div>
</div>`
        $(html).insertAfter('.shippingOfferSection')
        
        totalAmt += data[i].current_price * quantity;
        console.log(totalAmt)
        let deliveryChg = 129;
        if (totalAmt>=1000){
            deliveryChg = 0;
            document.querySelector('.shippingOffer').textContent = "Free home delivery"
            document.querySelector('.shipping').innerHTML = `<p>SHIPPING</p>
            <p>FREE</p>`
        }else{
            document.querySelector('.shippingOffer').innerHTML = `Add products worth ₹${1000 - totalAmt} more to your cart and get free home delivery`
            document.querySelector('.shipping').innerHTML = `<p>Estimated delivery</p>
            <p>₹ 129</p>`
        }

        document.querySelector('.totalPrice').textContent = totalAmt
        document.querySelector('.total').textContent = (totalAmt) + deliveryChg;

    }
    
}

const updateCart = (id, quantity) => {
    // id = queryFun().get('id');
    // console.log(id)
    url = `http://localhost:3000/cart/${id}`
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"qty":quantity});

    var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const checkOut = () => {
    updateCart();
    let id = queryFun();
    window.location.href = `./checkout.html?${id}`
}

document.getElementById('pinBlue').addEventListener('click', getPin)
document.getElementById('checkoutBtn').addEventListener('click', checkOut)
window.addEventListener('load', loadCartData)