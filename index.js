let btn = document.querySelectorAll(".flex button")

document.querySelector(".rating-ctn").style.display = "block"
document.querySelector(".thank-you-ctn").style.display = "none"

btn[0].onclick = function one(){
    num = btn[0].textContent
}

btn[1].onclick = function two(){
    num = btn[1].textContent
}

btn[2].onclick = function three(){
    num = btn[2].textContent
}

btn[3].onclick = function four(){
    num = btn[3].textContent
}

btn[4].onclick = function five(){
    num = btn[4].textContent
}

document.querySelector(".submitBtn").onclick = ()=> {
    document.querySelector(".rating-ctn").style.display = "none"
    document.querySelector(".thank-you-ctn").style.display = "block"
    
    document.querySelector(".result").textContent = num
}