const images = ["01.jpeg", "02.jpeg", "03.jpeg"];

const backgroundImage = images[Math.floor(Math.random() * images.length)];

const bg = document.createElement("img");

bg.src = `img/${backgroundImage}`;

document.body.appendChild(bg);