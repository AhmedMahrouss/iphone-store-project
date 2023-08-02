// Start Selector
let imgs = document.querySelectorAll("footer img")
let humburger = document.querySelector(".container .humpurger");
let sideNav = document.querySelector(".sideNav");
let closeNav  = document.querySelector(".close");
let imgContent = document.querySelector(".content img");
let phoneName = document.querySelector("h1");
// End Selector

// Start humburger event
humburger.onclick = ()=>{
sideNav.style.right = '0px'
closeNav.style.visibility = 'visible'
}
// End humburger event

// Start Close Nav Fun
closeNav.onclick = ()=>{
sideNav.style.right = '-40%'
closeNav.style.visibility = 'hidden'
}
// End Close Nav Fun

// Start event on footer imgs
imgs[0].onclick = ()=>{
document.body.style.background = '#000'
imgContent.src = 'images/0.png'
phoneName.innerHTML = 'Iphone 11 Pro Max'
phoneName.style.color = 'goldenrod'
}
imgs[1].onclick = ()=>{
document.body.style.background = 'rgb(53, 124, 211)'
imgContent.src = 'images/1.png'
phoneName.innerHTML = 'Iphone 12 Pro max'
phoneName.style.color = 'darkblue'

}
imgs[2].onclick = ()=>{
document.body.style.background = 'rgb(85, 85, 85)'
imgContent.src = 'images/2.png'
phoneName.innerHTML = 'Iphone 13 Pro max'
phoneName.style.color = 'darkgrey'

}
imgs[3].onclick = ()=>{
document.body.style.background = 'rgb(206, 189, 156)'
imgContent.src = 'images/3.png'
phoneName.innerHTML = 'Iphone 14 Pro max'
phoneName.style.color = '#000'

}
imgs[4].onclick = ()=>{
document.body.style.background = 'rgb(179, 30, 30)'
imgContent.src = 'images/4.png'
phoneName.innerHTML = 'Iphone 12 Pro'
phoneName.style.color = 'black'
}
// End event on footer imgs

                                   
