let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainerElement = document.getElementById("groceryListContainer");

groceryListContainerElement.classList.add("grocery-list-container");

let headingElement = document.createElement("h1");
headingElement.classList.add("grocery-list-heading");
headingElement.textContent = "Grocery-List";
groceryListContainerElement.appendChild(headingElement);

let listItemsContainerElement = document.createElement("ul");
listItemsContainerElement.classList.add("list-items-container");
groceryListContainerElement.appendChild(listItemsContainerElement);

for (let groceryItem of groceryList) {
    let listItemElement = document.createElement("li");
    listItemElement.textContent = groceryItem;
    listItemsContainerElement.appendChild(listItemElement);
}