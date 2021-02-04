window.addEventListener('load',fetchData);

function fetchData(){
    let url=` http://localhost:3000/fitness_essentials`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        createElements(data);
        let productNature=document.getElementsByClassName('productNature');
        [...productNature].forEach(el => {
            el.addEventListener('click',function(){
                filterByProductNature(data);
            });
        });
        let productBrand=document.getElementsByClassName('productBrand');
        [...productBrand].forEach(el=>{
            el.addEventListener('click',function(){
                filterByBrand(data);
            })
        });
        let productClr=document.getElementsByClassName('productClr');
        [...productClr].forEach(el=>{
            el.addEventListener('click',function(){
                filterByClr(data);
            })
        });
    });
}

let array=[];

function filterByProductNature(data){
    let input=event.currentTarget.firstElementChild;
    if(!input.checked){
        input.checked=true;
        let productNature=document.getElementsByClassName('productNature');
        let array1=[...productNature];
        var array2=[];
        let array3=[];
        for(let j=0;j<array1.length;j++){
            if(array1[j].firstElementChild.checked){
                array2.push(array1[j]);
            }
        }
        for(let k=0;k<data.length;k++){
            for(let l=0;l<array2.length;l++){
                if(data[k].nature===array2[l].id){
                    array3.push(data[k]);
                    break;
                }
            }
        }
        if(array3.length>0){
            createElements(array3);
        }
        else if(array3.length===0){
            createElements(data);
        }
    }
    else if(input.checked){
        input.checked=false;
        let productNature=document.getElementsByClassName('productNature');
        let array1=[...productNature];
        var array2=[];
        let array3=[];
        for(let j=0;j<array1.length;j++){
            if(array1[j].firstElementChild.checked){
                array2.push(array1[j]);
            }
        }
        for(let k=0;k<data.length;k++){
            for(let l=0;l<array2.length;l++){
                if(data[k].nature===array2[l].id){
                    array3.push(data[k]);
                    break;
                }
            }
        }
        if(array3.length>0){
            createElements(array3);
        }
        else if(array3.length===0){
            createElements(data);
        }
        
    }
    
    
}


function filterByBrand(data){
    let url=`http://localhost:3000/fitness_essentials?`
    let str=`brand=${event.currentTarget.id}`;
    let input=event.currentTarget.firstElementChild;
    if(!input.checked){
        input.checked=true;
        fetch(url+str)
        .then(res=>{
            return res.json();
        })
        .then(newData=>{
            createElements(newData);
        })
    }
    else if(input.checked){
        input.checked=false;
        createElements(data);
    }
}

function filterByClr(data){
    let url=`http://localhost:3000/fitness_essentials?`
    let str=`color=${event.currentTarget.id}`;
    let input=event.currentTarget.firstElementChild;
    if(!input.checked){
        input.checked=true;
        fetch(url+str)
        .then(res=>{
            return res.json();
        })
        .then(newData=>{
            createElements(newData);
        })
    }
    else if(input.checked){
        input.checked=false;
        createElements(data);
    }
}


function createElements(data){
    let displayElement=document.getElementById("productsCard");
    let output="";
    for(i in data){
        output+=`
        <div id="${data[i].id}" class="cardCover">
            <div class="cardImgCover">
                <img src="${data[i].img}" alt="${data[i].name}">
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

function redirectToPlaceOrder(data){
    let temp=data.find(el=>{
        return el.id==event.currentTarget.id;
    });
    location.assign(`pro.html?id=${temp.id}`);
}

function redirectHome(){
    location.assign('main_page.html')
}

let priceElements=document.getElementsByClassName('priceValue');
let value=priceElements[0].children[1];
let priceChanger=document.getElementById("priceChanger");
priceChanger.addEventListener('change',function(){
    value.innerHTML=priceChanger.value;
    let url=`http://localhost:3000/fitness_essentials?current_price_gte=200&current_price_lte=${value.innerHTML}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        createElements(data);
    })
})