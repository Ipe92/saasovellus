const weatherForm = document.getElementById("#formid");
const search = document.getElementById("#inputid");
const message = document.getElementById("#messageid");

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
