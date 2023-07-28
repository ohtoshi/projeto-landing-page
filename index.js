var arrowRight = window.document.getElementById("arrow-right")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var arrowLeft = window.document.getElementById("arrow-left")

function scrollRight() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    arrowLeft.style = "display:flex; margin-top:75px"
    arrowRight.style = "display:none"
}

function scrollToLeft() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    arrowRight.style = "display:flex; margin-top:55px"
    arrowLeft.style = "display:none"
}