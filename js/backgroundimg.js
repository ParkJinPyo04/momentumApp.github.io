const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenimage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimage}`

document.body.append(bgImage);

bgImage.classList = "img"