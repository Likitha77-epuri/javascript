let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let ingredientList = recipeObj.ingredients;

let recipeTitleElement = document.getElementById("recipeTitle");
let imgContainerElement = document.getElementById("imgContainer");
let imgElement = document.getElementById("img");
let ingredientListContainerElement = document.getElementById("ingredientListContainer");

recipeTitleElement.textContent = recipeObj.title;
imgElement.setAttribute("src", recipeObj.imgSrc);
imgElement.classList.add("w-180");
imgContainerElement.appendChild(imgElement);

for (let ingredient of ingredientList) {
    let ingredientElement = document.createElement("li");
    ingredientElement.textContent = ingredient;
    ingredientElement.classList.add("ingredient");
    ingredientListContainerElement.appendChild(ingredientElement);
}