const API_ROUTE = "https://api.quotable.io";

const generateQuoteButton = document.querySelector(".generate-quote");
const authorSearchBox = document.querySelector(".author-search-input");

const quoteBox = document.querySelector(".quote-text");
const quoteContainer = document.querySelector(".quote.center");
const quoteType = document.querySelector(".quote-type");
const authorName = document.querySelector(".author-name");

function displayQuote(data) {

    const { content, author, tags } = data;
    quoteContainer.style.setProperty("font-size", Math.round(content / 4));
    quoteBox.textContent = content;
    
    quoteBox.style.animation = "none";
    setTimeout(() => { quoteBox.style.animation = ""; }, 10);

    quoteType.textContent = tags.join(", ");
    authorName.textContent = `- ${author}`;
    
};

function displayError(data) {
    quoteBox.textContent = "Quote with that author name not found :/";
    quoteType.textContent = "";
    authorName.textContent = "";
}

generateQuoteButton.addEventListener("click", async (event) => {
    let response;

    if (authorSearchBox.value) {

        try {
            const query = authorSearchBox.value.toLowerCase();
            response = await fetch(API_ROUTE + `/search/quotes?query=${query}&fields=content,author,tags&limit=50`);
            
            const data = await response.json();
            if (!data.results) {
                throw new Error("Not found");
            }

            const index = Math.round(Math.random() * 50);
            const randomResult = data.results[index];
            displayQuote(randomResult);
        }
        catch (error) {
            return displayError();
        }

    }
    else {

        response = await fetch(API_ROUTE + "/random");
        displayQuote(await response.json());
        
    }
});

window.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        generateQuoteButton.click();
    };
});