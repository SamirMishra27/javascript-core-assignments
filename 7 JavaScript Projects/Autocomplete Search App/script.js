import programmingLanguages from "./programming-languages.js";

const searchBoxInput = document.querySelector(".search-box");
const resultsContainer = document.querySelector(".results");

function filterLanguages(value, lang) {
    return lang.toLowerCase().includes(value);
};

function performAutocomplete() {
    const value = searchBoxInput.value.toLowerCase();
    let resultsHtml = "";

    let matchingResults = programmingLanguages.filter(lang => filterLanguages(value, lang));
    matchingResults = matchingResults.slice(0,20);

    matchingResults.map((lang) => {
        const startIndex = lang.toLowerCase().indexOf(value);
        const matchingPart = lang.slice(startIndex, startIndex + value.length);

        const string = lang.replace(matchingPart, `<b>${matchingPart}</b>`);
        resultsHtml += `<div class="result">${string}</div>`;

    });
    resultsContainer.innerHTML = resultsHtml;
}

searchBoxInput.addEventListener("input", event => {
    if (!searchBoxInput.value) {
        resultsContainer.innerHTML = "";
        resultsContainer.classList.remove("expand");
        return;
    };

    performAutocomplete();
    resultsContainer.classList.add("expand");
});

resultsContainer.addEventListener("mouseup", event => {
    searchBoxInput.value = event.target.textContent;
});