
onclick="btnDoll()"
onclick="btnRup()"

function btnDoll() {
    document.getElementById("valDoll").style.display = "block"
    document.getElementById("valRup").style.display = "none"
 
 };
 
 
 function btnRup() {
    document.getElementById("valRup").style.display = "block"
    document.getElementById("valDoll").style.display = "none"
 };

//  --
//  --
//  --

// const btnTop = document.querySelector('.left-top-btn');




//  =========================

function questionOne() {
    var x = document.getElementById("clueOne");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function questionTwo() {
    var x = document.getElementById("clueTwo");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// -------------------q

mibtn.onclick = function(){
    toggleS.classList.toggle('toggler');
}