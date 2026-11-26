// ===== Data paket wisata =====
var paket = {
  bali: {
    judul: "Bali Escape",
    lokasi: "Bali, Indonesia",
    durasi: "3 Hari 2 Malam",
    harga: "Rp2.500.000",
    foto: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
    deskripsi:
      "Nikmati pantai, pura, dan sunset terbaik di Pulau Dewata dengan jadwal yang santai.",
    highlight: [
      "Hari 1: Tiba di Denpasar, check-in hotel, sunset di Pantai Jimbaran.",
      "Hari 2: Kunjungi Pura Uluwatu, Tanah Lot, dan Ubud.",
      "Hari 3: Belanja oleh-oleh dan antar ke bandara.",
    ],
    fasilitas: [
      "Hotel 2 malam",
      "Transportasi AC",
      "Pemandu lokal",
      "Tiket wisata",
      "Sarapan harian",
      "Asuransi perjalanan",
    ],
  },
  bromo: {
    judul: "Bromo Sunrise",
    lokasi: "Gunung Bromo, Jawa Timur",
    durasi: "2 Hari 1 Malam",
    harga: "Rp1.200.000",
    foto: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=900",
    deskripsi:
      "Saksikan matahari terbit dari atas lautan awan di salah satu gunung paling ikonik di Indonesia.",
    highlight: [
      "Hari 1: Perjalanan ke Cemoro Lawang, istirahat di penginapan.",
      "Hari 2: Jeep ke Penanjakan untuk sunrise, lanjut ke kawah dan Pasir Berbisik.",
    ],
    fasilitas: [
      "Jeep Bromo",
      "Penginapan 1 malam",
      "Pemandu lokal",
      "Tiket masuk TNBTS",
      "Makan sesuai jadwal",
      "Asuransi perjalanan",
    ],
  },
  rajaampat: {
    judul: "Raja Ampat Discovery",
    lokasi: "Raja Ampat, Papua Barat Daya",
    durasi: "4 Hari 3 Malam",
    harga: "Rp5.800.000",
    foto: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=900",
    deskripsi:
      "Island hopping di gugusan pulau karst dan snorkeling di terumbu karang yang menjadi alasan Raja Ampat dikenal dunia.",
    highlight: [
      "Hari 1: Tiba di Sorong, menyeberang ke Waisai, check-in homestay.",
      "Hari 2: Island hopping ke Pianemo dan spot snorkeling di sekitarnya.",
      "Hari 3: Desa Arborek, snorkeling bersama ikan karang, dan sunset di dermaga.",
      "Hari 4: Kembali ke Sorong dan antar ke bandara.",
    ],
    fasilitas: [
      "Speedboat selama island hopping",
      "Penginapan 3 malam",
      "Peralatan snorkeling",
      "Izin masuk kawasan konservasi",
      "Pemandu lokal",
      "Makan sesuai jadwal tour",
    ],
  },
  labuanbajo: {
    judul: "Labuan Bajo Sailing",
    lokasi: "Labuan Bajo, Nusa Tenggara Timur",
    durasi: "3 Hari 2 Malam",
    harga: "Rp3.900.000",
    foto: "https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=900",
    deskripsi:
      "Berlayar menyusuri pulau-pulau eksotis sambil bertemu komodo dan berenang bersama manta.",
    highlight: [
      "Hari 1: Tiba di Labuan Bajo, berlayar ke Pulau Kelor dan Pulau Kanawa.",
      "Hari 2: Trekking Pulau Padar, bertemu komodo di Pulau Komodo, Pink Beach.",
      "Hari 3: Snorkeling Manta Point, kembali ke dermaga dan antar ke bandara.",
    ],
    fasilitas: [
      "Kapal wisata",
      "Peralatan snorkeling",
      "Tiket Taman Nasional Komodo",
      "Ranger & pemandu lokal",
      "Makan di kapal",
      "Asuransi perjalanan",
    ],
  },
};

// ===== Modal detail paket =====
var modal = document.getElementById("modal");
var destinasiAktif = "";

function bukaModal(id) {
  var d = paket[id];
  destinasiAktif = id;

  document.getElementById("mFoto").style.backgroundImage =
    'url("' + d.foto + '")';
  document.getElementById("mJudul").textContent = d.judul;
  document.getElementById("mLokasi").textContent = d.lokasi;
  document.getElementById("mDurasi").textContent = d.durasi;
  document.getElementById("mHarga").textContent = d.harga;
  document.getElementById("mDeskripsi").textContent = d.deskripsi;

  document.getElementById("mHighlight").innerHTML = d.highlight
    .map(function (h) {
      return "<li>" + h + "</li>";
    })
    .join("");
  document.getElementById("mFasilitas").innerHTML = d.fasilitas
    .map(function (f) {
      return "<li>" + f + "</li>";
    })
    .join("");

  modal.classList.add("aktif");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function tutupModal() {
  modal.classList.remove("aktif");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Klik tombol "Lihat Selengkapnya"
document.querySelectorAll(".btn-detail").forEach(function (btn) {
  btn.addEventListener("click", function () {
    bukaModal(btn.dataset.id);
  });
});

// Tombol Tutup, klik area gelap, dan tombol Esc
document.getElementById("btnTutup").addEventListener("click", tutupModal);
modal.addEventListener("click", function (e) {
  if (e.target === modal) tutupModal();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") tutupModal();
});

// Tombol "Pesan Paket": tutup modal, scroll ke form, pilih destinasi otomatis
document.getElementById("btnPesan").addEventListener("click", function () {
  var select = document.getElementById("pilihDestinasi");
  var namaDestinasi = {
    bali: "Bali",
    bromo: "Gunung Bromo",
    rajaampat: "Raja Ampat",
    labuanbajo: "Labuan Bajo",
  }[destinasiAktif];

  select.value = namaDestinasi;
  select.dispatchEvent(new Event("change"));
  tutupModal();
  document.getElementById("kontak").scrollIntoView({ behavior: "smooth" });
});

// ===== Form pesan (validasi) =====
var form = document.getElementById("formPesan");
var notif = document.getElementById("notifForm");

function setError(id, pesan) {
  var field = document.getElementById(id).closest(".field");
  field.classList.toggle("salah", pesan !== "");
  field.querySelector(".error").textContent = pesan;
  return pesan === "";
}

function cekTeks(id, label) {
  var nilai = document.getElementById(id).value.trim();
  if (nilai === "") return setError(id, label + " tidak boleh kosong.");
  if (nilai.length < 3) return setError(id, label + " minimal 3 karakter.");
  return setError(id, "");
}

function cekEmail() {
  var nilai = document.getElementById("email").value.trim();
  if (nilai === "") return setError("email", "Email tidak boleh kosong.");
  if (nilai.length < 3) return setError("email", "Email minimal 3 karakter.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nilai)) {
    return setError("email", "Format email tidak valid, contoh: nama@email.com");
  }
  return setError("email", "");
}

function cekDestinasi() {
  var nilai = document.getElementById("pilihDestinasi").value;
  if (nilai === "") {
    return setError(
      "pilihDestinasi",
      "Peringatan: Silakan pilih destinasi terlebih dahulu."
    );
  }
  return setError("pilihDestinasi", "");
}

var validator = {
  nama: function () {
    return cekTeks("nama", "Nama");
  },
  email: cekEmail,
  pilihDestinasi: cekDestinasi,
  pesan: function () {
    return cekTeks("pesan", "Pesan tambahan");
  },
};

Object.keys(validator).forEach(function (id) {
  var el = document.getElementById(id);
  var cekUlang = function () {
    if (el.closest(".field").classList.contains("salah")) validator[id]();
  };
  el.addEventListener("input", cekUlang);
  el.addEventListener("change", cekUlang);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  notif.className = "notif";

  var hasil = Object.keys(validator).map(function (id) {
    return validator[id]();
  });

  if (hasil.indexOf(false) !== -1) {
    var destinasiKosong = document.getElementById("pilihDestinasi").value === "";
    notif.textContent = destinasiKosong
      ? "Peringatan: Kamu belum memilih destinasi. Silakan pilih destinasi terlebih dahulu."
      : "Mohon lengkapi semua kolom dengan benar sebelum mengirim.";
    notif.classList.add("gagal");
    form.querySelector(".salah input, .salah select, .salah textarea").focus();
    return;
  }

  var nama = document.getElementById("nama").value.trim();
  notif.textContent = "Terima kasih, " + nama + "! Pesanmu sudah kami terima.";
  notif.classList.add("sukses");
  form.reset();
});

// ===== Navbar =====
var header = document.getElementById("header");
var menu = document.getElementById("menu");
var menuToggle = document.getElementById("menuToggle");
var navLinks = document.querySelectorAll(".nav-link");
var bagian = ["beranda", "destinasi", "keunggulan", "kontak"].map(function (id) {
  return document.getElementById(id);
});

function tutupMenu() {
  menu.classList.remove("buka");
  menuToggle.classList.remove("buka");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", function () {
  var buka = menu.classList.toggle("buka");
  menuToggle.classList.toggle("buka", buka);
  menuToggle.setAttribute("aria-expanded", buka);
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var tujuan = document.querySelector(link.getAttribute("href"));
    if (!tujuan) return;
    e.preventDefault();
    tujuan.scrollIntoView({ behavior: "smooth", block: "start" });
    tutupMenu();
  });
});

function updateNavbar() {
  header.classList.toggle("scrolled", window.scrollY > 10);

  var posisi = window.scrollY + 120;
  var aktif = bagian[0].id;
  bagian.forEach(function (b) {
    if (b.offsetTop <= posisi) aktif = b.id;
  });
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    aktif = "kontak";
  }

  navLinks.forEach(function (l) {
    l.classList.toggle("aktif", l.getAttribute("href") === "#" + aktif);
  });
}
window.addEventListener("scroll", updateNavbar);
updateNavbar();