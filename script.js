// Data array of animals
let animals = [
  { name: "Kucing", image: "https://static.vecteezy.com/system/resources/previews/013/078/569/non_2x/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png", description: "A domestic animal known for its independence." },
  { name: "Anjing", image: "https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-happy-cartoon-dog-vector-png-image_6625750.png", description: "A loyal companion to humans." },
  { name: "Gajah", image: "https://i.pinimg.com/originals/2a/b5/c7/2ab5c7e34204f5984cbd288a65e10a38.png", description: "A loyal companion to humans." },
  { name: "Singa", image: "https://i.pinimg.com/564x/07/89/69/078969a64a576b87aecaf7c284bebb7f.jpg", description: "A loyal companion to humans." },
  { name: "Buaya", image: "https://pngfre.com/wp-content/uploads/Crocodile-7.png", description: "A loyal companion to humans." },
  { name: "Ayam", image: "https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-happy-cartoon-hen-vector-png-image_6625859.png", description: "A loyal companion to humans." },

  // Add more animals as needed
];

// Load animals from local storage
let likedAnimals = JSON.parse(localStorage.getItem("likedAnimals")) || [];

// Function to render animals in the gallery
function renderGallery() {
  const gallery = document.getElementById("animal-gallery");
  gallery.innerHTML = "";
  animals.forEach((animal, index) => {
    const isLiked = likedAnimals.includes(index);
    const likeButton = `<button class="btn btn-success like-btn container-fluid" data-index="${index}" ${isLiked ? "disabled" : ""}><i class="bi bi-heart-fill""></i> Like</button>`;
    const card = `
      <div class="col-md-4 mb-3">
        <div class="card shadow p-3 mb-5 border border-success border-3 rounded">
          <img src="${animal.image}" class="card-img-top" style="max-height: 300px;" alt="${animal.name}">
          <div class="card-body">
            <h5 class="card-title text-center">${animal.name}</h5>
            <p class="card-text">${animal.description}
            ${likeButton}
          </div>
        </div>
      </div>
    `;
    gallery.innerHTML += card;
  });
  updateLikeCount();
} 

// Function to update like count in navbar
function updateLikeCount() {
  const likeCount = document.getElementById("like-count");
  likeCount.textContent = `Likes: ${likedAnimals.length}/5`;
}

// Function to handle like button click
function handleLikeButtonClick(event) {
  const index = parseInt(event.target.dataset.index);
  if (!isNaN(index) && likedAnimals.length < 5 && !likedAnimals.includes(index)) {
    likedAnimals.push(index);
    localStorage.setItem("likedAnimals", JSON.stringify(likedAnimals));
    event.target.disabled = true;
    updateLikeCount();
    renderFavorites(); // Call renderFavorites to update the favorites modal
  }
}

// Function to render favorite animals in the modal
function renderFavorites() {
  const favoritesList = document.getElementById("favorites-list");
  favoritesList.innerHTML = "";
  likedAnimals.forEach(index => {
    const animal = animals[index];
    const listItem = `
  <div class="col-md-2 mb-4">
     <div class="card p-2">
        <img src="${animal.image}" class="card-img-top" alt="${animal.name}">
          <div class="card-bo
          +itle text-center">${animal.name}</h5>
            <!-- <p class="card-text">${animal.description}</p> -->
            <button class="btn btn-danger remove-btn container-fluid" data-index="${index}">Remove</button>
          </div>
      </div>
  </div>
    `;
    favoritesList.innerHTML += listItem;
  });

}

function AddPictureInFinal (){
  let HasilAkhir = document.getElementById(`GambarFinal`)
  let temp = ``
  // temp += `<image src="checkouttes_fhddddd.png" style="max-width: 100%; max-height: 100%; class:image-container">`
  //  BELUM ADA USER NAME
  // temp += `<h1 class=ZooName><strong>${UserName}'ZOO</strong></h1>`
  for (let i = 0; i < likedAnimals.length; i++) {
    let indexAnimals = likedAnimals[i]
    if (i === 0) {
    temp += `<image src ="${animals[indexAnimals].image}" class="position-absolute top-0 start-0 kompilasi">`
  } 
  if (i === 1) {
    temp += `<image src ="${animals[indexAnimals].image}" class="position-absolute top-0 end-0 kompilasi">`
  }
  if (i === 2) {
    temp += `<image src ="${animals[indexAnimals].image}" class="bottomLeftImage kompilasi">`
  }
  if (i === 3) {
    temp += `<image src ="${animals[indexAnimals].image}" class="bottomRightImage kompilasi">`
  }
  if (i === 4) {
    temp += `<image src ="${animals[indexAnimals].image}" class="Middlemage kompilasi">`
  }
  }
  HasilAkhir.innerHTML = temp
}


// Function to handle remove button click
function handleRemoveButtonClick(event) {
  const index = parseInt(event.target.dataset.index);
  if (!isNaN(index)) {
    likedAnimals = likedAnimals.filter(i => i !== index);
    localStorage.setItem("likedAnimals", JSON.stringify(likedAnimals));
    renderGallery();
    renderFavorites(); // Call renderFavorites to update the favorites modal
    updateLikeCount();
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderFavorites();
});

document.addEventListener("click", event => {
  if (event.target.classList.contains("like-btn")) {
    handleLikeButtonClick(event);
  } else if (event.target.classList.contains("remove-btn")) {
    handleRemoveButtonClick(event);
  }
});

// Function to handle form submission for adding a new animal
document.getElementById("addAnimalForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("animalName").value;
  const image = document.getElementById("animalImage").value;
  const description = document.getElementById("animalDescription").value;
  
  // Add the new animal to the animals array
  animals.push({ name, image, description });

  // Update the local storage with the new animals array
  localStorage.setItem("animals", JSON.stringify(animals));

  // Clear the form fields
  document.getElementById("animalName").value = "";
  document.getElementById("animalImage").value = "";
  document.getElementById("animalDescription").value = "";

  // Close the modal
  $('#addAnimalModal').modal('hide');

  // Re-render the gallery to display the new animal
  renderGallery();
});



// Function to initialize the application
// Function to initialize the application
function init() {
  // Load animals from local storage, or use an empty array if none exists
  const storedAnimals = JSON.parse(localStorage.getItem("animals")) || [];
  
  // Iterate through each stored animal and add it to the animals array if it's not already there
  storedAnimals.forEach(storedAnimal => {
    const isDuplicate = animals.some(animal => animal.name === storedAnimal.name);
    if (!isDuplicate) {
      animals.push(storedAnimal);
    }
  });

  renderGallery();
  renderFavorites();
  updateLikeCount();
}


init(); // Call init() to start the application

