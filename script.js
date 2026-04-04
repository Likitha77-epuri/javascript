let checkboxWithLabelContainerElement = document.getElementById("checkboxWithLabelContainer");

checkboxWithLabelContainerElement.classList.add("text-center", "p-5");

let checkBoxElement = document.createElement("input");
checkBoxElement.type = "checkbox";
checkBoxElement.id = "checkbox";
checkboxWithLabelContainerElement.appendChild(checkBoxElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox");
labelElement.textContent = "Click Me!";
labelElement.classList.add("ml-2");
labelElement.id = "checkboxLabel";
checkboxWithLabelContainerElement.appendChild(labelElement);