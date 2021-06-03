const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message = document.querySelector("#message");

console.log("weatherForm", weatherForm);
console.log("search", search);
console.log("message", message);

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = search.value;

    fetch("/weather?location=" + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message.textContent = data.error;
            } else {
                message.textContent = data.forecast;
            }
        });
    });
});
