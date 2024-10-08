fetch("/dist/json/myproject.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      let card = `<div
            class="w-[24em] h-auto p-4 scroll relative"
          >
            <div class= rounded-lg">
              <img
                src="${project.image}"
                alt="${project.title}"
                class="w-full h-[200px] rounded-lg text-white object-cover"
              />
            </div>

            <div class="mt-2">
              <p class="text-primary text-[13px]">
                ${project.description}
              </p>
              <a
                class="text-primary font-semibold hover:opacity-0.8"
                href="${project.link}"
                target="_blank"
              >
                Live Preview
                <i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>`;

      document.getElementById("projectList").innerHTML += card;

      window.addEventListener("scroll", () => {
        const projectCards = document.querySelectorAll(".scroll");
        projectCards.forEach((card, i) => {
          // card.classList.add("hidden");
          const cardPosition = card.offsetTop;
          const scrollPosition = window.scrollY + window.innerHeight;
          // console.log(scrollPosition, cardPosition);

          // card.classList.toggle("hidden", !inView); // Tambahkan class 'hidden' jika elemen tidak dalam viewport

          if (scrollPosition > cardPosition) {
            if (i % 2 === 0) {
              card.classList.add("project-left");
              card.classList.remove("project-right");
            } else {
              card.classList.add("project-right");
              card.classList.remove("project-left");
            }
          } else if (scrollPosition < cardPosition) {
            card.classList.remove("project-left", "project-right");
          }
        });
      });
    });
  });

// links
fetch("/dist/json/mylinks.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((link) => {
      let card = `<button
                class="mx-3 hover:scale-[1.2] transition-transform duration-200 w-[40px] h-[40px] max-md:w-[35px] max-md:h-[35px] bg-primary rounded-lg flex justify-center items-center active:scale-[0.9]"
                onclick="window.open('${link.url}', '_blank')"
              >
                <i
                  class="fa-brands ${link.icon} fa-2x"
                  style="color: #292a41"
                ></i>
              </button>`;

      document.getElementById("linkList").innerHTML += card;
    });
  });

// language icons
fetch("/dist/json/language.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((language) => {
      let card = `<div
              class="rounded-3xl flex flex-col items-center w-auto h-auto p-1 text-center skillCard "
            >
              <img class="w-12 h-12" src="${language.icons}" alt="${language.name}" />
              <h2 class="font-bold text-[14px] text-white">${language.name}</h2>
            </div>`;

      document.getElementById("language").innerHTML += card;
    });
  });

// tools icons
fetch("/dist/json/tools.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((tool) => {
      let card = `<div
              class="rounded-3xl flex flex-col items-center w-auto h-auto p-1 text-center skillCard "
            >
              <img class="w-12 h-12" src="${tool.icons}" alt="${tool.name}" />
              <h2 class="font-bold text-[14px] text-white">${tool.name}</h2>
            </div>`;

      document.getElementById("tools").innerHTML += card;
    });
  });

const hamButton = document.querySelector("#hamburger-button");
const hamOpen = document.querySelector("#hamburger-open");
const hamClose = document.querySelector("#hamburger-close");
const navMenu = document.querySelector("#nav-menu");
const hover = document.querySelector("#hover");

hamButton.addEventListener("click", function () {
  hamOpen.classList.toggle("hidden");
  hamClose.classList.toggle("hidden");

  if (navMenu.classList.contains("menu-open")) {
    navMenu.classList.remove("menu-open");
    navMenu.classList.add("menu-closed");
  } else {
    navMenu.classList.remove("menu-closed");
    navMenu.classList.add("menu-open");
  }
});

function hoverLeft() {
  hover.classList.add("hover-move");
  hover.classList.remove("translate-x-full");
  hover.classList.add("translate-x-0");
}

function hoverRight() {
  hover.classList.remove("hover-move");
  hover.classList.remove("translate-x-0");
  hover.classList.add("translate-x-full");
}

// "https://www.facebook.com/syntic.loaded", "_blank";
// onclick = "window.open('#')";
// header navbar scroll will change bg color
document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const cvDiv = document.querySelector("#cvButton span");
  const cvButton = document.querySelector("#cvButton");
  const navList = document.querySelector(".nav-list");

  if (window.scrollY > 20) {
    navList.classList.add("text-white");
    navList.classList.remove("text-primary");

    cvButton.classList.remove("border-primary");
    cvButton.classList.add("border-white");

    cvButton.classList.remove("text-primary");
    cvButton.classList.add("text-white");

    header.classList.add("scrolled2");
  } else {
    header.classList.remove("scrolled2");

    cvButton.classList.remove("border-white");
    cvButton.classList.add("border-primary");

    cvButton.classList.remove("text-white");
    cvButton.classList.add("text-primary");

    navList.classList.add("text-primary");
    navList.classList.remove("text-white");
  }
});

// Scroll animation for skill cards
window.addEventListener("scroll", () => {
  const skillCards = document.querySelectorAll(".skillCard");
  skillCards.forEach((skillCard) => {
    const skillCardPosition = skillCard.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > skillCardPosition) {
      skillCard.classList.add("animateSkill");
    } else {
      skillCard.classList.remove("animateSkill");
    }
  });
});

// cv button links when clicked
const cvButton = document.querySelector("#cvButton");
cvButton.addEventListener("click", () => {
  window.open("https://www.youtube.com/", "_blank");
});

// contact button when clicked go to contact section

const contactButton = document.querySelector("#contactMe");

contactButton.addEventListener("click", () => {
  const contactSection = document.querySelector("#contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
});

// image auto slide
let index = 0;
const slider = document.getElementById("slider");
const slideInterval = 6000;
const totalSlides = slider.children.length;

function autoSlide() {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 20}%)`;
  slider.style.transition = "transform 1.3s ease-in-out";
}

setInterval(autoSlide, slideInterval);

// making read more button

const readMore = document.querySelector("#readMorebutton");
const readMoreText = document.querySelector(".readMoreText");
const dot = document.querySelector(".dot");

readMore.addEventListener("click", () => {
  readMoreText.classList.toggle("max-md:hidden");
  if (readMoreText.classList.contains("max-md:hidden")) {
    readMore.textContent = "Read More";
    dot.classList.remove("max-md:hidden");
  } else {
    readMore.textContent = "Read Less";
    dot.classList.add("hidden");
  }
});
