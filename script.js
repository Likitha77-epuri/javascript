let userInputEl = document.getElementById('userInput');
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendPutHTTPRequest() {
    let userId = userInputEl.value;
    let url = "https://gorest.in/public/v2/users/" + userId; // include userId in URL
    let requestBody = requestBodyEl.value;
    let options = {
        method: "PUT",
        headers: { // ✅ lowercase
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9a4c4bfb18e01d1b3f0"
        },
        body: requestBody
    };

    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            let statusCode = response.status; // ✅ capture status
            return response.json().then(function(jsonData) {
                return {
                    statusCode,
                    jsonData
                };
            });
        })
        .then(function(result) {
            requestStatusEl.classList.remove("d-none");
            loadingEl.classList.add("d-none");

            // ✅ show actual HTTP status
            requestStatusEl.textContent = result.statusCode;

            // ✅ show full JSON response
            httpResponseEl.textContent = JSON.stringify(result.jsonData, null, 2);
        })
        .catch(function(error) {
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");
            requestStatusEl.textContent = "Error";
            httpResponseEl.textContent = error.toString();
        });
}

sendPutRequestBtnEl.addEventListener("click", sendPutHTTPRequest);