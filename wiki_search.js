let searchInputElement = document.getElementById("searchInput");
let searchResultsElement = document.getElementById("searchResults");
let spinnerElement = document.getElementById("spinner");

function createAndAppendSearchResults(result) {

    let {
        title,
        link,
        description
    } = result;

    //create result item
    let resultItemElement = document.createElement("div");
    resultItemElement.classList.add("result-item");
    searchResultsElement.appendChild(resultItemElement);


    //Create title Element(anchor title)
    let resultTitleElement = document.createElement("a");
    resultTitleElement.classList.add("result-title");
    resultTitleElement.textContent = title;
    resultTitleElement.href = link;
    resultTitleElement.target = "_blank";
    resultItemElement.appendChild(resultTitleElement);

    //Create break Element (title break)
    let titleBreakElement = document.createElement("br");
    resultItemElement.appendChild(titleBreakElement);

    //create URL Element(anchor url)
    let urlElement = document.createElement("a");
    urlElement.classList.add("result-url");
    urlElement.href = link;
    urlElement.target = "_blank";
    urlElement.textContent = link;
    resultItemElement.appendChild(urlElement);

    //Create Break Element
    let lineBreak = document.createElement("br");
    resultItemElement.appendChild(lineBreak);

    //Create Description Element
    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("link-description");
    descriptionElement.textContent = description;
    resultItemElement.appendChild(descriptionElement);
}

function displayResults(search_results) {

    spinnerElement.classList.toggle("d-none");
    for (let result of search_results) {
        createAndAppendSearchResults(result);
    }

}

function searchWikiPedia(event) {
    if (event.key === "Enter") {
        searchResultsElement.textContent = "";
        spinnerElement.classList.toggle("d-none");
        let searchInputText = searchInputElement.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputText;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}


searchInputElement.addEventListener("keydown", searchWikiPedia);