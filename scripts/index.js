// grab hold of gallery div and filter input, also set allImages/image sources to an array
const gallery = document.querySelector(".container__gallery");
const galleryFilter = document.querySelector(".container__search input");
const allImages = ["cow.jpg", "giraffe.jpg", "kangaroo.jpg", "koala.jpg", "panda.jpg", "shark.jpg"];

// take in array of image sources, forEach image add to a string that is then inserted into the page (gallery div) html
const displayImages = (sourcesArray) => {
  let html = "";
  sourcesArray.forEach((image) => {
    html += `<div class="container__gallery__item"><img src='./assets/${image}'/></div>`;
  });
  gallery.innerHTML = html;
};

displayImages(allImages);

// Allow user to filter by animal (image filename), then update using the above function with a filtered new array
// if no results, show by changing filter background color to suggest user to use a different search term (but show all images at the same time)

galleryFilter.addEventListener("keyup", (e) => {
  filterTerm = e.target.value.trim();
  newSearch = allImages.filter((image) => image.includes(filterTerm));
  if (newSearch.length > 0) {
    displayImages(newSearch);

    if (galleryFilter.classList.contains("false-filter")) {
      galleryFilter.classList.remove("false-filter");
    }
  } else {
    displayImages(allImages);
    galleryFilter.classList.add("false-filter");
  }
});

// note: there's also the toggle method that could be used for switching... div.classList.toggle("visible");
