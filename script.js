let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let skillListContainerElement = document.getElementById("skillListContainer");

function onMarkSkill(labelId) {
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("selected");
}

function createAndAppendSkill(skill) {
    let checkboxId = "checkbox" + skill.uniqueNo;
    let labelId = "label" + skill.uniqueNo;

    let skillElement = document.createElement("li");
    skillElement.classList.add("p-1");
    skillListContainerElement.appendChild(skillElement);
    let checkBoxElement = document.createElement("input");
    checkBoxElement.type = "checkbox";
    checkBoxElement.id = checkboxId;

    checkBoxElement.onclick = function() {
        onMarkSkill(labelId);
    };
    skillElement.appendChild(checkBoxElement);
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.id = labelId;
    labelElement.textContent = skill.skillName;
    skillElement.appendChild(labelElement);
}

for (let skill of skillList) {
    createAndAppendSkill(skill);
}