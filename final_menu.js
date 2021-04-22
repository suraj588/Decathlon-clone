let count = 0;
function displayNone(){
    count++;
    if(count%2==1){
        document.querySelector(".container_dropdown").style.display = "flex";
    }else{
        document.querySelector(".container_dropdown").style.display = "none";
    }
}

function Show() {
    let x = document.getElementById('show');
    let x1 = document.getElementById("show1");
    let x2 = document.getElementById('show2');
    let x3 = document.getElementById("show3");
    let x4 = document.getElementById('show4');
    if (x.style.display === "none") {
      x.style.display = "block" , x1.style.display = 'none', x2.style.display = 'none', x3.style.display = 'none', x4.style.display = 'none'
    } else {
      x.style.display = "none";
    }
  }
  function Show1() {
    let x = document.getElementById('show');
    let x1 = document.getElementById("show1");
    let x2 = document.getElementById('show2');
    let x3 = document.getElementById("show3");
    let x4 = document.getElementById('show4');
    if (x1.style.display === "none") {
      x1.style.display = "block" , x.style.display = 'none', x2.style.display = 'none', x3.style.display = 'none', x4.style.display = 'none'
    } else {
      x1.style.display = "none";
    }
  }
  
  function Show2() {
    let x = document.getElementById('show');
    let x1 = document.getElementById("show1");
    let x2 = document.getElementById('show2');
    let x3 = document.getElementById("show3");
    let x4 = document.getElementById('show4');
    if (x2.style.display === "none") {
      x2.style.display = "block" , x.style.display = 'none', x1.style.display = 'none', x3.style.display = 'none', x4.style.display = 'none'
    } else {
      x2.style.display = "none";
    }
  }
  
  function Show3() {
    let x = document.getElementById('show');
    let x1 = document.getElementById("show1");
    let x2 = document.getElementById('show2');
    let x3 = document.getElementById("show3");
    let x4 = document.getElementById('show4');
    if (x3.style.display === "none") {
      x3.style.display = "block" , x.style.display = 'none', x2.style.display = 'none', x1.style.display = 'none', x4.style.display = 'none'
    } else {
      x3.style.display = "none";
    }
  }
  
  function Show4() {
    let x = document.getElementById('show');
    let x1 = document.getElementById("show1");
    let x2 = document.getElementById('show2');
    let x3 = document.getElementById("show3");
    let x4 = document.getElementById('show4');
    if (x1.style.display === "none") {
      x4.style.display = "block" , x.style.display = 'none', x2.style.display = 'none', x3.style.display = 'none', x1.style.display = 'none'
    } else {
      x4.style.display = "none";
    }
}
