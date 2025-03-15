const images = [
    "bbd22f6b6258a773da63e3b2207996a9.jpg",
    "fb6f23be693533d68d622e0a0379ecd0.jpg",
    "84de7ac52addc691135f996c15ab8425.jpg",
    "dcc63dde5c42daf33790b7e890b1cd22.jpg", // "us🎀"
    "c45a69e0953e89a5084e4aa6211cebfb.jpg",
    "Think.jpg",
    "Flowe1.jpg",
    "94d03a88e846e364de1d603495b9b7ce.jpg"
];

let index = 0;
const displayedImage = document.getElementById("displayedImage");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    displayedImage.style.opacity = "0";
    setTimeout(() => {
        displayedImage.src = images[index];
        displayedImage.style.opacity = "1";
    }, 200);
});

prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    displayedImage.style.opacity = "0";
    setTimeout(() => {
        displayedImage.src = images[index];
        displayedImage.style.opacity = "1";
    }, 200);
});
