// Auto-Sliding Banner
let currentSlide = 0;
const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

// Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = form.name.value.trim();
  let email = form.email.value.trim();
  let interest = form.interest.value;

  if (name === "" || email === "" || interest === "") {
    alert("Please fill in all fields.");
  } else {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// Advantage Section Data
const advantages = {
  K: "Kualitas <br>selalu memastikan kualitas terbaik",
  I: "Integritas<br>Menjunjung tinggi integritas dan transparansi",
  L: "Layanan<br>Layanan yang ramah, responsif, dan profesional",
  A: "Aman<br>Keamanan merupakan prioritas utama",
  T: "Tepat<br>Tepat pada waktu dan tujuan",
};

const container = document.getElementById("advantage-container");

for (const [letter, description] of Object.entries(advantages)) {
  const flipBox = document.createElement("div");
  flipBox.className = "flip-box";

  const flipBoxInner = document.createElement("div");
  flipBoxInner.className = "flip-box-inner";

  const flipBoxFront = document.createElement("div");
  flipBoxFront.className = "flip-box-front";
  flipBoxFront.innerHTML = `<p class="p1">${letter}</p>`;

  const flipBoxBack = document.createElement("div");
  flipBoxBack.className = "flip-box-back";
  flipBoxBack.innerHTML = `<p class="p2"><strong>${
    description.split("<br>")[0]
  }</strong></p><p class="p2">${description.split("<br>")[1]}</p>`;

  flipBoxInner.appendChild(flipBoxFront);
  flipBoxInner.appendChild(flipBoxBack);
  flipBox.appendChild(flipBoxInner);
  container.appendChild(flipBox);
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    // Jika scroll lebih dari 50px
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
