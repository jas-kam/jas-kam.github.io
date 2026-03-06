console.log("myScript loaded");

const slides = document.querySelector(".slides");

let position = 0;
let speed = 1;
let paused = false;

function animateCarousel() {
    if (!paused) {
        position -= speed;
        slides.style.transform = `translateX(${position}px)`;

        const first = slides.firstElementChild;
        const gap = 20;
        const slideWidth = first.offsetWidth + gap;

        if (Math.abs(position) >= slideWidth) {
            position += slideWidth;
            slides.appendChild(first);
            slides.style.transform = `translateX(${position}px)`;
        }
    }

    requestAnimationFrame(animateCarousel);
}

slides.addEventListener("mouseenter", () => paused = true);
slides.addEventListener("mouseleave", () => paused = false);

animateCarousel();

    const galleries = {
        italy: [
            "images/photography/italy/20251104_202417.jpg",
            "images/photography/italy/20251105_091053.jpg",
            "images/photography/italy/20251105_135554.jpg",
            "images/photography/italy/20251106_115911.jpg"
        ],
        japan: [
            "images/photography/japan/20250320_144554.jpg",
            "images/photography/japan/20250321_154138.jpg",
            "images/photography/japan/20250321_215103.jpg",
            "images/photography/japan/20250322_100551.jpg",
            "images/photography/japan/IMG-20250325-WA0057.jpg"
        ],
        czech: [
            "images/photography/czech/100_0161.JPG",
            "images/photography/czech/IMG20250702124747.jpg",
            "images/photography/czech/IMG20250702182938.jpg",
            "images/photography/czech/IMG20250703103711.jpg",
            "images/photography/czech/IMG20250703104801.jpg"
        ]
    };

    window.openGallery = function (country) {
        const modal = document.getElementById("galleryModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalImages = document.getElementById("modalImages");

        if (!modal || !modalTitle || !modalImages || !galleries[country]) return;

        modalTitle.textContent = country.charAt(0).toUpperCase() + country.slice(1);
        modalImages.innerHTML = "";

        galleries[country].forEach(function (imageSrc) {
            const img = document.createElement("img");
            img.src = imageSrc;
            img.alt = country;
            modalImages.appendChild(img);
        });

        modal.style.display = "block";
    };

    window.closeGallery = function () {
        const modal = document.getElementById("galleryModal");
        if (modal) {
            modal.style.display = "none";
        }
    };

    window.addEventListener("click", function (event) {
        const modal = document.getElementById("galleryModal");
        if (event.target === modal) {
            window.closeGallery();
        }
    });
;