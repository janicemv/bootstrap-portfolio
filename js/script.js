"use strict";

const gallery = document.getElementById("gallery");

const images = [
    "./img/design/adhara-favicon.png",
    "./img/design/adhara-full.jpg",
    "./img/design/eow-favicon.png",
    "./img/design/eow-full.png",
    "./img/design/jv-logo.png",
    "./img/design/star-lab.png",
    "./img/design/aileen-daw-cover-1.png",
];

images.forEach(src => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-3 mb-4";

    const img = document.createElement("img");
    img.src = src;
    img.className = "img-thumbnail";
    img.alt = "Thumbnail";

    col.appendChild(img);
    gallery.appendChild(col);
});