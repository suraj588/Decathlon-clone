const popUp = () => {
    document.getElementById('pageBody').style.backgroundColor = 'rgba(20, 20, 20, 0.3)';
    document.getElementById('pageBody').style.opacity = '0.3'
    document.getElementById('loginCard').style.display = 'block'
    document.getElementById('loginCard').style.transitionDelay ="1s ease"
    // document.getElementById('loginCard').style.transform ="1s"
}
const home = () => {
    window.location.href = "./login.html"
}

const changelocation = () => {
    window.location.href = "./fitnessEssentials.html"
}

const goToHome = () => {
    window.location.href = './main_page/main_page.html'
}
// const login = () => {
//     let user = localStorage.getItem('number')

//     // let userObj = JSON.parse(user)
//     console.log(user)
// }
document.getElementById('blueLoginBtn').addEventListener('click', goToHome)
document.querySelector('.blueBtn').addEventListener('click', popUp)
document.getElementById('closeBtn').addEventListener('click', home)
// document.getElementById('blueLoginBtn').addEventListener('click', login)