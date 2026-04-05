let cartItemTextInputElement = document.getElementById("cartItemTextInput");
let cartItemsContainerElement = document.getElementById("cartItemsContainer");

function onAddCartItem() {
    let cartItemText = cartItemTextInputElement.value;

    let cartItemElement = document.createElement("li");
    cartItemElement.textContent = cartItemText;

    cartItemTextInputElement.value = "";
    cartItemsContainerElement.appendChild(cartItemElement);
}