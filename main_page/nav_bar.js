document.getElementById("search").addEventListener("keyup",() => {
    on();
})

// function handleData(e) {
//     let result = document.getElementById("search").value ;
//     console.log(result)
//     fetch(`http://localhost:3000/fitness_essentials?q=${result}`)
//     .then((res)=>res.json())
//     .then((res)=>{console.log(res)})
//     .catch((err)=>{console.log(err)})
// }

function on() {
    //handleData();
    document.getElementById("overlay").style.display = "block";
    let result = document.getElementById("search").value ;
    //console.log(result)
    fetch(`http://localhost:3000/fitness_essentials?q=${result}`)
    .then((res)=>res.json())
    .then((res)=>{
        printData(res)  
    })
    .catch((err)=>{console.log(err)})
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function printData(data) {
    console.log("data",data)
    let div = ""
    for(i in data) {
        //console.log(data[i],i)
        div += 
            `<div>
                <h5>${data[i].name}</h5>
            </div>`
    }
    console.log(div)
    document.getElementById("displayData").innerHTML = div;
}

{/* <div class = "row">
            <p>${data[i].rating}<i class="fa fa-star"></i></p>
            <button>ADD TO CART</button>
         </div> */}
