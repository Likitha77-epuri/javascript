let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendPostHTTPRequest() {
    let requestUrl = "https://gorest.in/public/v2/users";
    let requestBody = requestBodyEl.value;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9a4c4bfb18e01d1b3f0",
        },
        body: requestBody
    };
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(requestUrl, options)
        .then(function(response) {
            // Save the status code
            let statusCode = response.status;
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

            // Show the actual HTTP status code
            requestStatusEl.textContent = result.statusCode;

            // Show the full JSON response
            httpResponseEl.textContent = JSON.stringify(result.jsonData, null, 2);
        })
        .catch(function(error) {
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");
            requestStatusEl.textContent = "Error";
            httpResponseEl.textContent = error.toString();
        });
}

sendPostRequestBtnEl.addEventListener("click", sendPostHTTPRequest);