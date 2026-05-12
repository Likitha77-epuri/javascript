// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let submitBtn = document.getElementById("submitBtn");
let bookmarksList = document.getElementById("bookmarksList");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");

function addBookMark() {
    let siteName = siteNameInput.value;
    let siteURL = siteUrlInput.value;
    let listItem = document.createElement("li");
    bookmarksList.appendChild(listItem);
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = siteName;
    bookmarkUrl.textContent = siteURL;
    bookmarkUrl.href = siteURL;
    bookmarkUrl.setAttribute("target", "_blank");
    bookmarksList.classList.remove("d-none");
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkUrl);
}

siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let siteName = siteNameInput.value.trim();
    let siteURL = siteUrlInput.value.trim();
    let isValid = true;
    if (siteName === "") {
        siteNameErrMsg.textContent = "Required*";
        isValid = false;
    }
    if (siteURL === "") {
        siteUrlErrMsg.textContent = "Required*";
        isValid = false;
    } else if (!(siteURL.startsWith("https://") || siteURL.startsWith("http://"))) {
        siteUrlErrMsg.textContent = "Invalid URL";
        isValid = false;
    }
    if (isValid) {
        addBookMark();
        siteNameInput.value = "";
        siteUrlInput.value = "";
    }
});
