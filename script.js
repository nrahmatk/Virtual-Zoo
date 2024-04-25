// Data array of animals
let animals = [
  { name: "Kucing", image: "https://static.vecteezy.com/system/resources/previews/013/078/569/non_2x/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png", description: "Kucing, Felis catus, adalah spesies mamalia kecil yang berasal dari keluarga Felidae dan telah menjadi bagian dari kehidupan manusia selama ribuan tahun. Tergolong hewan karnivora. Asal usul kucing dapat ditelusuri kembali ke predator kecil yang hidup di padang pasir dan dataran tinggi Asia, yang secara alami beradaptasi dengan lingkungan yang keras dan mempertahankan kemampuan untuk berburu dengan efisien. Kucing adalah hewan yang sangat penasaran dan suka menjelajahi lingkungan sekitarnya. Mereka sering kali bereksperimen dengan objek dan suka memanjat." },
  { name: "Anjing", image: "https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-happy-cartoon-dog-vector-png-image_6625750.png", description: "Anjing, Canis lupus familiaris, adalah mamalia domestik yang berasal dari keluarga Canidae. Mereka adalah salah satu hewan yang paling setia dan akrab dengan manusia, telah menjadi sahabat manusia selama ribuan tahun. Asal usul anjing dapat ditelusuri kembali ke serigala abu-abu yang hidup secara liar di berbagai belahan dunia. Dalam proses domestikasi, anjing mengembangkan berbagai ras dengan karakteristik fisik dan perilaku yang berbeda. Anjing dikenal karena kecerdasan mereka, kemampuan untuk belajar, dan kesetiaan kepada pemiliknya. Mereka juga memiliki naluri sosial yang kuat dan dapat membentuk ikatan yang erat dengan manusia dan sesama anjing." },
  { name: "Zebra", image: "https://i.pinimg.com/originals/5d/b6/2c/5db62c945823a0306feba525530672bb.png", description: "Zebra, Equus zebra, adalah mamalia herbivora yang dikenal karena pola belang hitam dan putih mereka yang mencolok. Mereka merupakan bagian dari keluarga Equidae dan ditemukan di padang rumput Afrika. Zebra sering bermigrasi dalam jumlah besar, mencari sumber makanan yang baru. Mereka juga memiliki sistem sosial yang kompleks dan hidup dalam kawanan besar yang dipimpin oleh pemimpin jantan." },
  { name: "Jerapah", image: "https://png.pngtree.com/png-clipart/20230413/original/pngtree-hand-draw-cute-giraffe-in-cartoon-style-png-image_9053056.png", description: "Jerapah, Giraffa camelopardalis, adalah mamalia herbivora terbesar di dunia dengan leher panjang yang khas. Mereka ditemukan di Afrika Sub-Sahara dan menggunakan leher panjang mereka untuk mencapai daun-daun tinggi di pohon. Jerapah hidup dalam kelompok kecil dan sering berpindah-pindah mencari makanan." },
  { name: "Gajah", image: "https://i.pinimg.com/originals/2a/b5/c7/2ab5c7e34204f5984cbd288a65e10a38.png", description: "Gajah, Elephantidae, adalah mamalia raksasa yang berasal dari Asia dan Afrika. Mereka adalah salah satu hewan darat terbesar di dunia dan memiliki belalai yang panjang dan canggih, yang digunakan untuk mengambil makanan, minum, dan berkomunikasi. Gajah hidup dalam kelompok sosial yang kompleks yang disebut kawanan, dipimpin oleh gajah betina tertua atau matriark. Mereka dikenal karena kecerdasan mereka yang tinggi, memori yang kuat, dan perilaku sosial yang kompleks. Gajah juga merupakan hewan herbivora yang memakan berbagai jenis tumbuhan." },
  { name: "Singa", image: "https://i.pinimg.com/564x/07/89/69/078969a64a576b87aecaf7c284bebb7f.jpg", description: "Singa, Panthera leo, adalah mamalia karnivora besar yang berasal dari Afrika dan beberapa bagian Asia. Mereka adalah simbol kekuatan dan keanggunan, dan terkenal dengan singgasana mereka dalam kawanan. Singa jantan biasanya bertanggung jawab atas perlindungan wilayah dan pemangsaan, sementara singa betina sering kali berburu bersama dan membesarkan anak-anak mereka. Singa dikenal karena kemampuan berburu mereka yang kuat, kecerdasan sosial, dan kemampuan untuk berkomunikasi melalui suara-suaranya yang khas." },
  { name: "Buaya", image: "https://pngfre.com/wp-content/uploads/Crocodile-7.png", description: "Buaya adalah reptil besar yang hidup di air, terutama ditemukan di daerah tropis dan subtropis di seluruh dunia. Mereka adalah predator yang efisien dan tangguh, dengan moncong panjang dan gigi yang tajam. Buaya memiliki kemampuan untuk menunggu dengan sabar sebelum menyerang mangsa mereka, menggunakan kekuatan dan kecepatan untuk menangkap buruan. Mereka juga dikenal karena kemampuan mereka untuk beradaptasi dengan lingkungan air yang beragam, dari sungai hingga rawa-rawa." },
  { name: "Ayam", image: "https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-happy-cartoon-hen-vector-png-image_6625859.png", description: "Ayam, Gallus gallus domesticus, adalah unggas yang paling umum dipelihara di seluruh dunia untuk daging dan telur mereka. Mereka adalah hewan yang mudah beradaptasi dan sering berkumpul dalam kelompok. Ayam memiliki berbagai jenis, termasuk ayam ras dan ayam kampung, dengan variasi warna dan bentuk tubuh yang berbeda. Selain menjadi sumber pangan, ayam juga memiliki peran ekologis dalam mengendalikan populasi serangga dan mencampurkan tanah di lingkungan pertanian." },
  { name: "Panda", image: "https://png.pngtree.com/png-clipart/20201117/ourmid/pngtree-cartoon-panda-clipart-png-image_2436083.jpg", description: "Panda, Ailuropoda melanoleuca, adalah mamalia omnivora yang terkenal dengan warna hitam dan putih mereka. Ada dua spesies panda: panda raksasa dan panda kecil. Panda raksasa terutama memakan bambu, sementara panda kecil memakan buah-buahan dan serangga. Keduanya terancam punah dan menjadi fokus konservasi yang luas." },
  { name: "Kura-kura", image: "https://png.pngtree.com/png-vector/20230324/ourmid/pngtree-simple-flat-hand-draw-cute-cartoon-turtle-vector-png-image_6667208.png", description: "Kura-kura adalah reptil bersisik dengan cangkang yang keras yang mereka gunakan untuk perlindungan. Mereka ditemukan di berbagai habitat di seluruh dunia. Kura-kura adalah herbivora atau omnivora, tergantung pada spesiesnya, dan dapat hidup selama puluhan tahun." },
  { name: "Tupai", image: "https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-squirrel-cartoon-animal-png-image_10446551.png", description: "Tupai adalah mamalia kecil yang sering ditemukan di hutan-hutan Asia, Eropa, dan Amerika Utara. Mereka memiliki tubuh kecil dengan ekor panjang dan bulu yang lebat. Tupai adalah hewan omnivora dan memakan berbagai jenis makanan, termasuk buah-buahan, biji-bijian, dan serangga." },
  { name: "Baruang", image: "https://pngfre.com/wp-content/uploads/Bear-18.png", description: "Beruang adalah mamalia besar yang ditemukan di berbagai habitat di seluruh dunia. Mereka terdiri dari beberapa spesies, termasuk beruang cokelat, beruang hitam, dan beruang kutub. Beruang adalah omnivora dan memakan berbagai makanan, termasuk tumbuhan dan hewan kecil. Beberapa spesies beruang, seperti beruang kutub, terancam punah karena perubahan iklim dan hilangnya habitat." },
  { name: "Burung Hantu:", image: "https://png.pngtree.com/png-vector/20220825/ourmid/pngtree-cute-owl-cartoon-png-image_6124386.png", description: "Burung Hantu adalah burung yang terkenal dengan kebiasaan tidur pada siang hari dan berburu pada malam hari. Mereka termasuk dalam ordo Strigiformes dan ditemukan di berbagai habitat di seluruh dunia, kecuali di Antartika. Burung Hantu memiliki kemampuan pendengaran dan penglihatan yang luar biasa, memungkinkan mereka untuk menangkap mangsa mereka dengan presisi tinggi." },

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
     <div class="card shadow p-2">
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

