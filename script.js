// ================= NAVBAR =================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

btnTema?.addEventListener('click', function () {
  bodyHalaman.classList.toggle('light-mode');

  if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Mode Gelap';
  } else {
    btnTema.textContent = '☀️ Mode Terang';
  }
});

// Membuka dan menutup menu pada layar HP
menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Menutup menu setelah salah satu menu diklik
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});



// ================= MODAL CONTACT =================

const contactButton =
    document.getElementById("contactButton");

const contactModal =
    document.getElementById("contactModal");

const closeModal =
    document.getElementById("closeModal");


// Membuka modal
contactButton.addEventListener("click", function () {

    contactModal.classList.add("active");

});


// Menutup modal
closeModal.addEventListener("click", function () {

    contactModal.classList.remove("active");

});


// Menutup modal ketika area luar diklik
contactModal.addEventListener("click", function (event) {

    if (event.target === contactModal) {

        contactModal.classList.remove("active");

    }

});


// Menutup modal dengan tombol Escape
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        contactModal.classList.remove("active");

    }

});



// ================= ANIMASI SCROLL =================

const cards =
    document.querySelectorAll(
        ".project-card, .contact-card"
    );


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});