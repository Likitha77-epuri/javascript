let checkBoxWithLabelContainerElement = document.getElementById("checkBoxWithLabelContainer");
let checkboxId = "checkbox";
let labelId = "checkboxLabel";

function onCheckboxStatusChange() {
    checkboxLabelElement.classList.toggle("strike-through");
}

let checkboxInputElement = document.createElement("input");
checkboxInputElement.type = "checkbox";
checkboxInputElement.id = checkboxId;

checkboxInputElement.onclick = function() {
    onCheckboxStatusChange();
};
checkBoxWithLabelContainer.appendChild(checkboxInputElement);

let checkboxLabelElement = document.createElement("label");
checkboxLabelElement.classList.add("checkbox.label");
checkboxLabelElement.setAttribute("for", checkboxId);
checkboxLabelElement.id = labelId;
checkboxLabelElement.textContent = " I am a label";
checkBoxWithLabelContainer.appendChild(checkboxLabelElement);