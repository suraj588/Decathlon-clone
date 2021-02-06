const queryFun = () => {
    let query = window.location.search;
    let id = new URLSearchParams(query)
    return id
}
const loadCartData = () => {
    let id = queryFun()
    url = `http://localhost:3000/cart`
    console.log(url)
    fetch(url).then((data) => data.json()).then((data) => createCart(data))
}

const createCart = (data) => {
    let totalAmt = 0;
    let deliveryChg = 0
    for(i in data){
    totalAmt += data[i].current_price * data[i].qty;
    let deliveryChg = 129;
    if (totalAmt>=1000){
        deliveryChg = 0;
        document.querySelector('.shipping').innerHTML = `<p>SHIPPING</p>
        <p>FREE</p>`
    }else{
        document.querySelector('.shipping').innerHTML = `<p>Estimated delivery</p>
        <p>₹ 129</p>`
    }
    console.log(data[i])
    if(data.length == 1){
    document.querySelector('.itemImg').innerHTML= `<img src="${data[i].img}"/>`
    document.querySelector('.orderItemName').textContent = data[i].name
    document.querySelector('.itemOrderDetail').innerHTML = `
                            <p>Size:<strong>${data[i].size.toUpperCase()}</strong></p>
                            <p>Quantity:<strong>${data[i].qty}</strong></p>
                            <p><strong>₹${totalAmt}</strong></p>
    `
    }else{
        document.querySelector('.items').style.display = 'none';
    }
    }
    document.querySelector('.total').textContent = "₹ " +(totalAmt + deliveryChg);
}
window.addEventListener('load', loadCartData)