let idArray = ["reviewTitle", "reviewText", "reviewName"];
let tagArray = ["h4", "p", "i"];
let form = document.getElementById("reviewForm");

function reviewSelect(reviewTag) {
    return document.getElementById(reviewTag);
}

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let cardPosition = document.getElementById("reviewsRow");
    let cardBluePrint = cardPosition.firstElementChild.cloneNode(true);

    for (let reviewNum in idArray) {
        let reviewValue = reviewSelect(idArray[reviewNum]).value;
        if (reviewValue === "") {
            reviewValue = "Anonymous";
        }
        cardBluePrint.querySelector(tagArray[reviewNum]).innerHTML = reviewValue;
    }
    cardPosition.appendChild(cardBluePrint);
});