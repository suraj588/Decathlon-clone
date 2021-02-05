const queryFun = () => {
    let query = window.location.search;
    let id = new URLSearchParams(query)
    return id
}
const loadCartData = () => {
    let id = queryFun()
    url = `http://localhost:3000/cart?${id}`
    console.log(url)
    fetch(url).then((data) => data.json()).then((data) => createCart(data))
}

const createCart = (data) => {
    totalAmt = data[0].current_price * data[0].qty;
    let deliveryChg = 129;
    if (totalAmt>=1000){
        deliveryChg = 0;
        document.querySelector('.shipping').innerHTML = `<p>SHIPPING</p>
        <p>FREE</p>`
    }else{
        document.querySelector('.shipping').innerHTML = `<p>Estimated delivery</p>
        <p>₹ 129</p>`
    }
    console.log(data[0])
    document.querySelector('.itemImg').innerHTML= `<img src="${data[0].img}"/>`
    document.querySelector('.orderItemName').textContent = data[0].name
    document.querySelector('.itemOrderDetail').innerHTML = `
                            <p>Size: <strong></strong>${data[0].size.toUpperCase()}</p>
                            <p>Quantity: <strong>${data[0].qty}</strong></p>
                            <p><strong>₹ ${totalAmt}</strong></p>
    `
    document.querySelector('.total').textContent = "₹ " +(totalAmt + deliveryChg);
}
window.addEventListener('load', loadCartData)