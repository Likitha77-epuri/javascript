let addUserFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let statusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "male"
};
nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});
emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});
statusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});
genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});
genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

function validateFormData(formData) {
    let {
        name,
        email
    } = formData;
    let isValid = true;
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
        isValid = false;
    } else {
        nameErrMsgEl.textContent = "";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
        isValid = false;
    } else {
        emailErrMsgEl.textContent = "";
    }
    return isValid;
}

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 9f401acddfb1dce3"
        },
        body: JSON.stringify(formData)
    };
    let url = "https://gorest.co.in/public-api/users";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.code === 422) {
                let errorMsg = jsonData.data[0].message;

                if (errorMsg === "has already been taken") {
                    emailErrMsgEl.textContent = "Email already exists";
                }

            } else if (jsonData.code === 201) {
                alert("User created successfully");
            }
        });
}
addUserFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = validateFormData(formData);
    if (isValid) {
        submitFormData(formData);
    }
});