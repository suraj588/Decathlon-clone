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
    })
}

let array=[];

function filterByProductNature(data){
    let temp=data.filter(el=>{
        return el.nature===event.currentTarget.id;
    });
    for(i in temp){
        array.push(temp[i]);
    }
    // console.log(temp)
    let input=event.currentTarget.firstElementChild;
    if(!input.checked){
        input.checked=true;
        createElements(array);
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

function createElements(data){
    let displayElement=document.getElementById("productsCard");
    let output="";
    for(i in data){
        output+=`
        <div class="cardCover">
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
    
}