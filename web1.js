let card =document.querySelector(".trend");
let card2 =document.getElementById("trendSec");
let about =document.querySelector(".about");
let contact=document.querySelector(".contact")

console.log(card);
let blog =document.querySelector(".trends");
let mainPage =document.querySelector(".main");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block"
    blog.style.display="block";
    
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="rgb(2, 173, 173)";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    }

function shops(){
mainPage.style.display="none";
blog.style.display="none";

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="rgb(2, 173, 173)";
document.getElementById("contact").style.color="black";
}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none"
    blog.style.display="block";
    
   
document.getElementById("blog").style.color="rgb(2, 173, 173)";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";

}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none"
    blog.style.display="none";
    about.style.display="block";
    
   
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="rgb(2, 173, 173)";

}

function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none"
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="block";
    
   
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="block";
document.getElementById("about").style.color="block";
document.getElementById("contact").style.color="rgb(2, 173, 173)";

}
