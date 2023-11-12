const date = new Date();
if (date.getHours() >= 19 && date.getHours() <= 24 || date.getHours() >= 0 && date.getHours() <= 5) {
  document.body.style.backgroundImage = "linear-gradient(to bottom, #020E40, #0F6DAA)";
} else if (date.getHours() >= 17 && date.getHours() <= 18) {
  document.body.style.backgroundImage = "linear-gradient(to bottom, #FF5E57, #FFDD59)";
} else if (date.getHours() >= 8 && date.getHours() <= 16) {
  document.body.style.backgroundImage = "linear-gradient(to left top, #00D8D6, #0FBCF9)";
} else {
  document.body.style.backgroundImage = "linear-gradient(to bottom, #575FCF, #EF5777)";
}
