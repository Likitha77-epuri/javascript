let aboutTabElement=document.getElementById("aboutTab");
let timeToVisitTabElement=document.getElementById("timeToVisitTab");
let attractionsTabElement=document.getElementById("attractionsTab");
let aboutButtonElement=document.getElementById("aboutButton");
let timeToVisitButtonElement=document.getElementById("timeToVisitButton");
let attractionsButtonElement=document.getElementById("attractionsButton");

timeToVisitTabElement.classList.add("d-none");
attractionsTabElement.classList.add("d-none");

function onClickAboutTab(){
    aboutTabElement.classList.remove("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");
    
    aboutTabElement.classList.add("selected-button");
    timeToVisitTabElement.classList.remove("selected-button");
    attractionsTabElement.classList.remove("selected-button");
}

function onClickTimeToVisitTab(){
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.remove("d-none");
    attractionsTabElement.classList.add("d-none");
    
    aboutTabElement.classList.remove("selected-button");
    timeToVisitTabElement.classList.add("selected-button");
    attractionsTabElement.classList.remove("selected-button");
}

function onClickAttractionsTab(){
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.remove("d-none");
    
    aboutTabElement.classList.remove("selected-button");
    timeToVisitTabElement.classList.remove("selected-button");
    attractionsTabElement.classList.add("selected-button");
}