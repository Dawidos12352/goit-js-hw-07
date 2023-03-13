import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryArray = [];

galleryItems.forEach( event => {

const galleryItem = document.createElement("div");
galleryItem.className = "gallery__item";

const galleryLink = document.createElement("a");
galleryLink.className = "gallery__link";
galleryLink.href = event.original;

const galleryImage = document.createElement("img");
galleryImage.className = "gallery__image";
galleryImage.src = event.preview;
galleryImage.setAttribute("data-source", event.original);
galleryImage.alt = event.description;

galleryItem.append(galleryLink);
galleryLink.append(galleryImage);
galleryArray.push(galleryItem);
});

gallery.append(...galleryArray);

gallery.addEventListener( "click", event => {
    event.preventDefault();

if (event.target.nodeName !== "IMG") {
    return;
}
const dataSourceImage = event.target.getAttribute("data-source");

const instance = basicLightbox.create(
    `<img src="${dataSourceImage}" width="800" height="600">`, {
    onShow: (instance) => {
document.addEventListener( "keydown", (event) =>{
    if (event.key === "Escape") instance.close();
});
    }}
    );

instance.show();
});

