// Data array of animals
let animals = [
  { name: "Kucing", image: "https://static.vecteezy.com/system/resources/previews/013/078/569/non_2x/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png", description: "" },
  { name: "Anjing", image: "https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-happy-cartoon-dog-vector-png-image_6625750.png", description: "" },
  { name: "Gajah", image: "https://i.pinimg.com/originals/2a/b5/c7/2ab5c7e34204f5984cbd288a65e10a38.png", description: "" },
  { name: "Singa", image: "https://i.pinimg.com/564x/07/89/69/078969a64a576b87aecaf7c284bebb7f.jpg", description: "" },
  { name: "Buaya", image: "https://pngfre.com/wp-content/uploads/Crocodile-7.png", description: "" },
  { name: "Ayam", image: "https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-happy-cartoon-hen-vector-png-image_6625859.png", description: "" },

  // Add more animals as needed
];
// Fungsi untuk mendapatkan deskripsi hewan berdasarkan nama
function getAnimalDescription(namaHewan) {
  if (namaHewan === "Kucing") {
    return "Kucing, Felis catus, adalah spesies mamalia kecil yang berasal dari keluarga Felidae dan telah menjadi bagian dari kehidupan manusia selama ribuan tahun. Tergolong hewan karnivora. Asal usul kucing dapat ditelusuri kembali ke predator kecil yang hidup di padang pasir dan dataran tinggi Asia, yang secara alami beradaptasi dengan lingkungan yang keras dan mempertahankan kemampuan untuk berburu dengan efisien. Kucing adalah hewan yang sangat penasaran dan suka menjelajahi lingkungan sekitarnya. Mereka sering kali bereksperimen dengan objek dan suka memanjat. "
  } else if (namaHewan === "Anjing") {
    return "Anjing adalah salah satu hewan peliharaan yang paling populer di dunia. Mereka adalah mamalia domestik yang setia dan loyal kepada manusia sejak ribuan tahun yang lalu. Anjing telah menjadi bagian integral dari kehidupan manusia, berperan sebagai teman, penjaga rumah, hewan penolong, dan bahkan mitra pekerja dalam berbagai bidang seperti penjagaan, pencarian dan penyelamatan, dan terapi. Dengan beragam ras, ukuran, dan karakteristiknya, anjing menunjukkan kecerdasan yang luar biasa serta kemampuan untuk memahami dan merespons perintah manusia. Selain itu, anjing juga memiliki hubungan sosial yang kompleks, baik dengan sesama anjing maupun dengan manusia. Menjaga dan merawat anjing dengan baik bukan hanya memenuhi kebutuhan fisiknya, tetapi juga mengembangkan ikatan emosional yang kuat antara manusia dan hewan."
  } else if (namaHewan === "Gajah") {
    return "Gajah adalah mamalia besar yang terkenal dengan belalainya yang panjang. Mereka hidup di lingkungan sosial kompleks dan memiliki kecerdasan yang luar biasa.Gajah adalah hewan sosial yang hidup dalam kelompok besar yang disebut kawanan. Mereka berkomunikasi menggunakan berbagai suara, gerakan tubuh, dan bahkan getaran tanah yang tidak terdengar oleh manusia. Gajah adalah herbivora yang menghabiskan sebagian besar hari mereka mencari makanan. Diet mereka terdiri dari berbagai tumbuhan, seperti rumput, daun, buah, dan kulit pohon. Gajah sangat ketergantungan dengan air , mereka sering membawa air ke mulut mereka dengan menggunakan belalai mereka atau meminum langsung dari sungai atau kolam."
  } else if (namaHewan === "Singa") {
    return "Singa adalah predator besar yang kuat dan gagah. Mereka merupakan bagian penting dari ekosistem savana dan hutan di Afrika. Singa betina biasanya melahirkan anak setelah periode kehamilan sekitar 3,5 bulan. Anak singa, disebut anak singa, dilindungi oleh induk betina dalam beberapa minggu pertama kehidupan mereka. Singa jantan memiliki peran penting dalam melindungi kawanan dan wilayah mereka dari ancaman dari luar, termasuk singa jantan lainnya."
  } else if (namaHewan === "Buaya") {
    return "Buaya adalah reptil karnivora yang hidup di perairan tawar dan payau. Mereka memiliki tubuh yang dilengkapi dengan perisai kulit yang kokoh dan sangat terampil dalam berburu.  Buaya adalah pemangsa karnivora yang kuat dan efisien. Mereka memburu berbagai jenis mangsa, mulai dari ikan dan amfibi hingga mamalia besar seperti rusa dan kerbau. Buaya sering menggunakan teknik penyergapan, bersembunyi di bawah air dan menunggu mangsa mereka untuk mendekat sebelum menyerang dengan cepat."
  } else if (namaHewan === "Ayam") {
    return "Ayam adalah unggas domestik yang sering dijadikan sebagai sumber protein hewani. Mereka memiliki berbagai macam warna dan jenis, dan sering dipelihara untuk telur dan dagingnya. Ayam adalah sumber makanan yang penting bagi manusia, dengan daging dan telurnya menjadi bagian penting dari diet di banyak budaya di seluruh dunia. Selain sebagai sumber makanan, ayam juga digunakan untuk keperluan lain seperti hiasan, pertunjukan, dan bahkan sebagai peliharaan."
  } else {
    return "Deskripsi hewan ini belum tersedia."
  }
}

// Looping array animals dan menambahkan deskripsi
for (let i = 0; i < animals.length; i++) {
  animals[i].description = getAnimalDescription(animals[i].name)
}


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
          <img src="${animal.image}" class="card-img-top" style="max-height: 300px;" alt="${animal.name}" onclick="showAnimalModal(${index})">
          <div class="card-body">
            <h5 class="card-title text-center">${animal.name}</h5>
            <!-- <p class="card-text">${animal.description}</p> -->
            ${likeButton}
          </div>
        </div>
      </div>
    `;
    gallery.innerHTML += card;
  });
  updateLikeCount();
} 

function showAnimalModal(index) {
  const animal = animals[index];
  const modal = document.getElementById("animalModal");
  const modalImg = modal.querySelector(".modal-img");
  const modalName = modal.querySelector(".modal-name");
  const modalDescription = modal.querySelector(".modal-description");

  modalImg.src = animal.image;
  modalName.textContent = animal.name;
  modalDescription.textContent = animal.description;

  // Show the modal
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
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
          <div class="card-body">
            <h5 class="card-title text-center">${animal.name}</h5>
            <!-- <p class="card-text">${animal.description}</p> -->
            <button class="btn btn-danger remove-btn container-fluid" data-index="${index}">Remove</button>
          </div>
      </div>
  </div>
    `;
    favoritesList.innerHTML += listItem;
  });

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

function resetData () {
  localStorage.clear()
  window.location = "home.html"
}

init(); // Call init() to start the application

