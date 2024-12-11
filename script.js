// Konten untuk setiap buku
const bookContents = {
  komet: [
    "Komet - Halaman 1: Awal petualangan di dunia Komet.",
    "Komet - Halaman 2: Karakter utama bertemu dengan teman baru.",
    "Komet - Halaman 3: Konflik mulai muncul.",
    "Komet - Halaman 4: Perjalanan mencapai puncaknya.",
    "Komet - Halaman 5: Akhir cerita yang menakjubkan.",
  ],
  selena: [
    "Selena - Halaman 1: Pengenalan dunia Selena.",
    "Selena - Halaman 2: Misteri mulai terungkap.",
    "Selena - Halaman 3: Karakter menghadapi dilema besar.",
    "Selena - Halaman 4: Perjalanan penuh tantangan.",
    "Selena - Halaman 5: Penutup kisah yang emosional.",
  ],
  nebula: [
    "Nebula - Halaman 1: Awal dari perjalanan di dunia Nebula.",
    "Nebula - Halaman 2: Temuan yang mengubah segalanya.",
    "Nebula - Halaman 3: Persahabatan diuji.",
    "Nebula - Halaman 4: Perjuangan menghadapi ancaman besar.",
    "Nebula - Halaman 5: Kesimpulan yang menggugah hati.",
  ],
  bulan: [
    "Bulan - Halaman 1: Perjalanan dimulai di dunia Bulan.",
    "Bulan - Halaman 2: Temuan baru yang mengejutkan.",
    "Bulan - Halaman 3: Tantangan semakin besar.",
    "Bulan - Halaman 4: Persahabatan diuji.",
    "Bulan - Halaman 5: Akhir yang menggugah.",
  ],
  ayah: [
    "Ayah - Halaman 1: Sebagai seorang ayah, Sabari adalah sosok yang luar biasa. Meski hidup sederhana, ia selalu berusaha memberikan yang terbaik untuk keluarganya.",
    "Ayah - Halaman 2: Kenangan masa kecil dengan ayah yang penuh perjuangan dan cinta mulai terungkap.",
    "Ayah - Halaman 3: Sabari menghadapi berbagai tantangan hidup demi membahagiakan anak-anaknya.",
    "Ayah - Halaman 4: Kisah mendalam tentang pengorbanan dan cinta seorang ayah yang tak terbatas.",
    "Ayah - Halaman 5: Pesan mendalam tentang arti sebuah keluarga dan pengorbanan seorang ayah.",
  ],
  padangBulan: [
    "Padang Bulan - Halaman 1: Kisah tentang seorang gadis bernama Enong yang memiliki semangat luar biasa untuk belajar.",
    "Padang Bulan - Halaman 2: Perjalanan hidup Enong di tengah keterbatasan ekonomi keluarganya.",
    "Padang Bulan - Halaman 3: Perjuangan untuk mengejar pendidikan dan mimpi-mimpinya.",
    "Padang Bulan - Halaman 4: Kekuatan tekad dan cinta keluarga yang menggerakkan hidupnya.",
    "Padang Bulan - Halaman 5: Inspirasi tentang pentingnya pendidikan dan semangat hidup.",
  ],
  sangPemimpi: [
    "Sang Pemimpi - Halaman 1: Perkenalan dengan para tokoh utama - Ikal, Arai, dan Jimbron - di kampung kecil di Belitung.",
    "Sang Pemimpi - Halaman 2: Mimpi-mimpi besar mereka yang tumbuh di lingkungan sederhana.",
    "Sang Pemimpi - Halaman 3: Perjuangan mereka mengejar pendidikan dan impian di tengah keterbatasan.",
    "Sang Pemimpi - Halaman 4: Kisah persahabatan yang kuat dan saling mendukung dalam menggapai cita-cita.",
    "Sang Pemimpi - Halaman 5: Pesan inspiratif tentang kekuatan mimpi dan persahabatan.",
  ],
  sebelasPatriot: [
    "Sebelas Patriot - Halaman 1: Kisah tentang tim sepak bola yang penuh semangat dan tekad.",
    "Sebelas Patriot - Halaman 2: Perjalanan tim menghadapi berbagai tantangan dan hambatan.",
    "Sebelas Patriot - Halaman 3: Konflik internal dan eksternal yang menguji persatuan tim.",
    "Sebelas Patriot - Halaman 4: Perjuangan mereka membuktikan diri di lapangan hijau.",
    "Sebelas Patriot - Halaman 5: Makna sejati patriotisme dan kebersamaan dalam olahraga.",
  ],
  kucinganjing: [
    "Sebelas Patriot - Halaman 1: Kisah tentang tim sepak bola yang penuh semangat dan tekad.",
    "Sebelas Patriot - Halaman 2: Perjalanan tim menghadapi berbagai tantangan dan hambatan.",
    "Sebelas Patriot - Halaman 3: Konflik internal dan eksternal yang menguji persatuan tim.",
    "Sebelas Patriot - Halaman 4: Perjuangan mereka membuktikan diri di lapangan hijau.",
    "Sebelas Patriot - Halaman 5: Makna sejati patriotisme dan kebersamaan dalam olahraga.",
  ],
  cantikituluka: [
    "Sebelas Patriot - Halaman 1: Kisah tentang tim sepak bola yang penuh semangat dan tekad.",
    "Sebelas Patriot - Halaman 2: Perjalanan tim menghadapi berbagai tantangan dan hambatan.",
    "Sebelas Patriot - Halaman 3: Konflik internal dan eksternal yang menguji persatuan tim.",
    "Sebelas Patriot - Halaman 4: Perjuangan mereka membuktikan diri di lapangan hijau.",
    "Sebelas Patriot - Halaman 5: Makna sejati patriotisme dan kebersamaan dalam olahraga.",
  ],
  O: [
    "Sebelas Patriot - Halaman 1: Kisah tentang tim sepak bola yang penuh semangat dan tekad.",
    "Sebelas Patriot - Halaman 2: Perjalanan tim menghadapi berbagai tantangan dan hambatan.",
    "Sebelas Patriot - Halaman 3: Konflik internal dan eksternal yang menguji persatuan tim.",
    "Sebelas Patriot - Halaman 4: Perjuangan mereka membuktikan diri di lapangan hijau.",
    "Sebelas Patriot - Halaman 5: Makna sejati patriotisme dan kebersamaan dalam olahraga.",
  ],
  sumur: [
    "Sebelas Patriot - Halaman 1: Kisah tentang tim sepak bola yang penuh semangat dan tekad.",
    "Sebelas Patriot - Halaman 2: Perjalanan tim menghadapi berbagai tantangan dan hambatan.",
    "Sebelas Patriot - Halaman 3: Konflik internal dan eksternal yang menguji persatuan tim.",
    "Sebelas Patriot - Halaman 4: Perjuangan mereka membuktikan diri di lapangan hijau.",
    "Sebelas Patriot - Halaman 5: Makna sejati patriotisme dan kebersamaan dalam olahraga.",
  ],
  ruangsunyi: [
    "Sebelas Patriot - Halaman 1: Kisah tentang tim sepak bola yang penuh semangat dan tekad.",
    "Sebelas Patriot - Halaman 2: Perjalanan tim menghadapi berbagai tantangan dan hambatan.",
    "Sebelas Patriot - Halaman 3: Konflik internal dan eksternal yang menguji persatuan tim.",
    "Sebelas Patriot - Halaman 4: Perjuangan mereka membuktikan diri di lapangan hijau.",
    "Sebelas Patriot - Halaman 5: Makna sejati patriotisme dan kebersamaan dalam olahraga.",
  ],
  perahukertas: [
    "Sebelas Patriot - Halaman 1: Kisah tentang tim sepak bola yang penuh semangat dan tekad.",
    "Sebelas Patriot - Halaman 2: Perjalanan tim menghadapi berbagai tantangan dan hambatan.",
    "Sebelas Patriot - Halaman 3: Konflik internal dan eksternal yang menguji persatuan tim.",
    "Sebelas Patriot - Halaman 4: Perjuangan mereka membuktikan diri di lapangan hijau.",
    "Sebelas Patriot - Halaman 5: Makna sejati patriotisme dan kebersamaan dalam olahraga.",
  ],
  senja: [
    "Sebelas Patriot - Halaman 1: Kisah tentang tim sepak bola yang penuh semangat dan tekad.",
    "Sebelas Patriot - Halaman 2: Perjalanan tim menghadapi berbagai tantangan dan hambatan.",
    "Sebelas Patriot - Halaman 3: Konflik internal dan eksternal yang menguji persatuan tim.",
    "Sebelas Patriot - Halaman 4: Perjuangan mereka membuktikan diri di lapangan hijau.",
    "Sebelas Patriot - Halaman 5: Makna sejati patriotisme dan kebersamaan dalam olahraga.",
  ],
  tentangrasa: [
    "Sebelas Patriot - Halaman 1: Kisah tentang tim sepak bola yang penuh semangat dan tekad.",
    "Sebelas Patriot - Halaman 2: Perjalanan tim menghadapi berbagai tantangan dan hambatan.",
    "Sebelas Patriot - Halaman 3: Konflik internal dan eksternal yang menguji persatuan tim.",
    "Sebelas Patriot - Halaman 4: Perjuangan mereka membuktikan diri di lapangan hijau.",
    "Sebelas Patriot - Halaman 5: Makna sejati patriotisme dan kebersamaan dalam olahraga.",
  ],
};

// Variabel untuk melacak buku dan halaman yang aktif
let activeBook = null;
let currentPage = 0;

// Event listener untuk tombol "Baca Buku"
document.querySelectorAll(".read-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    activeBook = e.target.dataset.book;
    currentPage = 0; // Reset ke halaman pertama
    updateBookContent();

    // Sembunyikan semua kategori buku dan judul kategori
    document.querySelectorAll("h2").forEach((h2) => {
      h2.style.display = "none";
    });

    document.querySelectorAll(".book-cards").forEach((card) => {
      card.style.display = "none";
    });

    // Tampilkan konten buku dan tombol navigasi
    document.getElementById("bookContent").style.display = "block";
    document.getElementById("navigationButtons").style.display = "flex";
  });
});

// Fungsi untuk memperbarui konten buku
function updateBookContent() {
  const bookContent = document.getElementById("bookContent");
  bookContent.innerHTML = bookContents[activeBook][currentPage];
}

// Event listener untuk tombol navigasi
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < bookContents[activeBook].length - 1) {
    currentPage++;
    updateBookContent();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateBookContent();
  }
});

document.getElementById("backToHomeBtn").addEventListener("click", () => {
  // Sembunyikan konten buku
  document.getElementById("bookContent").style.display = "none";
  document.getElementById("navigationButtons").style.display = "none";

  // Sembunyikan judul kategori
  document.querySelectorAll("h2").forEach((h2) => {
    h2.style.display = "block";
  });

  // Tampilkan kembali kategori buku yang relevan
  document.querySelectorAll(".book-cards").forEach((card) => {
    card.style.display = "flex";
  });
});
