let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");
let imageContainerElement = document.getElementById("imgContainer");
let imageElement = document.createElement("img");
imageElement.setAttribute("src", profileDetails.imgSrc);
imageElement.classList.add("profile-img");
imageContainerElement.appendChild(imageElement);

let nameElement = document.createElement("h1");
nameElement.classList.add("profile-name");
nameElement.textContent = profileDetails.name;
profileContainerElement.appendChild(nameElement);

let ageElement = document.createElement("p");
ageElement.classList.add("age");
ageElement.textContent = "Age: " + profileDetails.age;
profileContainerElement.appendChild(ageElement);