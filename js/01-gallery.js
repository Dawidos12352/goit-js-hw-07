import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery  = document.querySelector("div.gallery");
const galleryArray = [];


galleryItems.forEach(event => {
const galleryItem = document.createElement("div");
galleryItem.classList = "gallery__item";

const galleryLink = document.createElement("a");
galleryLink.classList = "gallery__link";
galleryLink.href = event.original;

const galleryImage = document.createElement("img");
galleryImage.classList = "gallery__image"
galleryImage.src = event.preview;
galleryImage.alt = event.description;
galleryImage.setAttribute("data-source", event.orginal);

galleryItem.append(galleryLink);
galleryLink.append(galleryImage);
galleryArray.push(galleryItem);

});

gallery.append(...galleryArray);

console.log(galleryItems);
