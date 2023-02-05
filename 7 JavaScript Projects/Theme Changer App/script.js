const toggleButton = document.querySelector(".toggle-button");
const currThemeText = document.querySelector(".curr-theme");
const image = document.querySelector(".toggle-button img");

toggleButton.addEventListener("click", event => {
    for (elementName of ["body", ".navbar-section", ".toggle-button", ".main", ".text"]) {
        document.querySelector(elementName).classList.toggle("dark");
    };

    currThemeText.textContent = currThemeText.textContent === "DARK" ? "LIGHT" : "DARK";
    image.src = image.src.includes("/moon.svg") ? "./sun.svg" : "./moon.svg";
});