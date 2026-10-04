/* =================================
   PORTFOLIO - ANDINI OKTAVIA
   JAVASCRIPT
================================= */


/* ================================
   CURRENT YEAR
================================ */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ================================
   DARK / LIGHT MODE
================================ */

const html = document.documentElement;

const themeToggle = document.getElementById("themeToggle");
const themeToggleMobile =
    document.getElementById("themeToggleMobile");


function toggleDarkMode() {

    if (html.classList.contains("dark")) {

        html.classList.remove("dark");

        localStorage.setItem("theme", "light");

    } else {

        html.classList.add("dark");

        localStorage.setItem("theme", "dark");
    }
}


/* Load saved theme */

const savedTheme = localStorage.getItem("theme");

if (
    savedTheme === "dark" ||
    (
        !savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )
) {

    html.classList.add("dark");

} else {

    html.classList.remove("dark");
}


/* Theme buttons */

if (themeToggle) {
    themeToggle.addEventListener(
        "click",
        toggleDarkMode
    );
}

if (themeToggleMobile) {
    themeToggleMobile.addEventListener(
        "click",
        toggleDarkMode
    );
}


/* ================================
   MOBILE MENU
================================ */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileLinks =
    document.querySelectorAll(".mobile-link");


if (mobileMenuBtn && mobileMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });

}


/* Close mobile menu after clicking link */

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


/* ================================
   PORTFOLIO FILTER
================================ */

const filterBtns =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterBtns.forEach((button) => {

    button.addEventListener("click", () => {

        /* Remove active state */

        filterBtns.forEach((btn) => {

            btn.classList.remove(
                "active",
                "bg-slate-800",
                "text-white",
                "dark:bg-brand-accent"
            );

            btn.classList.add(
                "bg-white",
                "dark:bg-gray-800"
            );

        });


        /* Add active state */

        button.classList.add(
            "active",
            "bg-slate-800",
            "text-white",
            "dark:bg-brand-accent"
        );

        button.classList.remove(
            "bg-white",
            "dark:bg-gray-800"
        );


        /* Get category */

        const filter =
            button.getAttribute("data-filter");


        /* Filter project */

        projectCards.forEach((card) => {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ================================
   PROJECT MODAL
================================ */

function openModal(
    title,
    desc,
    category,
    tags
) {

    const modal =
        document.getElementById("projectModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDesc =
        document.getElementById("modalDesc");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalTags =
        document.getElementById("modalTags");


    modalTitle.textContent = title;

    modalDesc.textContent = desc;

    modalCategory.textContent = category;


    /* Clear old tags */

    modalTags.innerHTML = "";


    /* Create tags */

    tags.forEach((tag) => {

        const tagElement =
            document.createElement("span");

        tagElement.className =
            "text-[10px] px-2.5 py-1 rounded-md bg-rose-50 dark:bg-purple-900/30 text-rose-600 dark:text-purple-300 font-medium";

        tagElement.textContent = tag;

        modalTags.appendChild(tagElement);

    });


    /* Show modal */

    modal.classList.remove("hidden");

}


/* Close modal */

function closeModal() {

    const modal =
        document.getElementById("projectModal");

    modal.classList.add("hidden");

}


/* Close modal by clicking background */

const projectModal =
    document.getElementById("projectModal");

if (projectModal) {

    projectModal.addEventListener("click", (event) => {

        if (event.target === projectModal) {

            closeModal();

        }

    });

}


/* Close modal with Escape */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* ================================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");

const toast =
    document.getElementById("toast");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /* Show toast */

            if (toast) {

                toast.classList.remove(
                    "translate-y-20",
                    "opacity-0",
                    "pointer-events-none"
                );

            }


            /* Reset form */

            contactForm.reset();


            /* Hide toast */

            setTimeout(() => {

                if (toast) {

                    toast.classList.add(
                        "translate-y-20",
                        "opacity-0",
                        "pointer-events-none"
                    );

                }

            }, 4000);

        }
    );

}