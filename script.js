let userInputEl = document.getElementById('userInput');
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendDeleteHTTPRequest() {
    let userInput = userInputEl.value;
    let url = "https://gorest.in/public/v2/users" + userInput;
    let options = {
        method: "DELETE",
        Headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    };
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusEl.classList.remove("d-none");
            loadingEl.classList.add("d-none");

            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}
sendDeleteRequestBtnEl.addEventListener("click", sendDeleteHTTPRequest);