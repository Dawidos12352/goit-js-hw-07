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
galleryImage.setAttribute("data-source", event.original);

galleryItem.append(galleryLink);
galleryLink.append(galleryImage);
galleryArray.push(galleryItem);

});

gallery.append(...galleryArray);

gallery.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") return;
    const imageDataSource = e.target.getAttribute("data-source");

    const instance = basicLightbox.create(
        `<img src="${imageDataSource}" width="800" height="600">`,
        {
            onShow: (instance) => {
                document.addEventListener("keydown", (e) => {
                    if (e.key === "Escape") instance.close();
                });
            }
        });
    
    instance.show();

});

