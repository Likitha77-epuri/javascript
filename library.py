let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let messageEl = document.getElementById("message");
let spinnerEl = document.getElementById("spinner");
let headingEl = document.getElementById("heading");

function createAndAppendSearchResults(search_results) {
    searchResultsEl.textContent = "";
    if (search_results.length < 1) {
        messageEl.textContent = "No Results Found";
        headingEl.textContent = "";
    } else {
        messageEl.textContent = "";
        headingEl.textContent = "Popular Books";

        for (let eachItem of search_results) {
            let title = eachItem.title;
            let image = eachItem.imageLink;
            let author = eachItem.author;
            let imageEl = document.createElement("img");
            let textEl = document.createElement("p");
            imageEl.src = image;
            imageEl.style.width = "120px";
            textEl.textContent = author;
            searchResultsEl.appendChild(imageEl);
            searchResultsEl.appendChild(textEl);

        }
    }
}
searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");


        let searchInputVal = searchInputEl.value;
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputVal;

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                let {
                    search_results
                } = jsonData;
                createAndAppendSearchResults(search_results);
                spinnerEl.classList.add("d-none");
            })
            .catch(function(error) {
                console.log(error);
                spinnerEl.classList.add("d-none");
                messageEl.textContent = "Something went wrong";
            });
    }
});
