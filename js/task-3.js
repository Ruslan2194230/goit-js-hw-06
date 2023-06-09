const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const getGallery = document.querySelector("#gallery");

// const galleryItemString = images
//   .map(
//     (image) =>
//       `<li class = 'galery-item'> <img src='${image.url}' alt = '${image.alt}' class = 'galery-img'> </li>`
//   )
//   .join("");

// getGallery.insertAdjacentHTML("beforeend", galleryItemString);

const galaryContainer = document.querySelector("#gallery");

const imagesHtmlCode = images.map(
  ({url, alt}) =>
  `<li class = 'galery-item'> <img src ='${url}' alt = '${alt}' class = 'galery-img'>  </li>`
  ).join('');

galaryContainer.insertAdjacentHTML("beforeend", imagesHtmlCode)