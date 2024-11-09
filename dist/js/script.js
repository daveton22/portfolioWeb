// frontEndProject
fetch("/dist/json/frontEndProject.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      let card = `<div
            class="w-[24em] max-md:w-[12em] h-auto p-4 scroll relative bg-primary rounded-md shadow-custom-dark max-md:h-auto"
          >
            <div class= rounded-lg">
              <img
                src="${project.image}"
                alt="${project.title}"
                class="w-full h-[200px] max-md:h-[100px] unded-lg text-white object-cover"
              />
            </div>

            <div class="mt-2">
            <a
              class="text-tertiary font-semibold hover:opacity-0.8"
              href="${project.link}"
              target="_blank"
            >
              Live Preview
              <i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
              <p class="text-secondary text-[13px] max-md:text-[9px]">
                ${project.description}
              </p>
            </div>
          </div>`;

      document.getElementById("frontEndProject").innerHTML += card;

      // window.addEventListener("scroll", () => {
      //   const projectCards = document.querySelectorAll(".scroll");
      //   projectCards.forEach((card, i) => {
      //     // card.classList.add("hidden");
      //     const cardPosition = card.offsetTop;
      //     const scrollPosition = window.scrollY + window.innerHeight;
      //     // console.log(scrollPosition, cardPosition);

      //     // card.classList.toggle("hidden", !inView); // Tambahkan class 'hidden' jika elemen tidak dalam viewport

      //     if (scrollPosition > cardPosition) {
      //       if (i % 2 === 0) {
      //         card.classList.add("project-left");
      //         card.classList.remove("project-right");
      //       } else {
      //         card.classList.add("project-right");
      //         card.classList.remove("project-left");
      //       }
      //     } else if (scrollPosition < cardPosition) {
      //       card.classList.remove("project-left", "project-right");
      //     }
      //   });
      // });
    });
  });

// links
fetch("/dist/json/mylinks.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((link) => {
      let card = `<button
                class="mx-3 hover:scale-[1.2] transition-transform duration-200 w-[40px] h-[40px] max-md:w-[35px] max-md:h-[35px]  rounded-lg flex justify-center items-center active:scale-[0.9]"
                onclick="window.open('${link.url}', '_blank')"
              >
                <i
                  class="fa-brands ${link.icon} fa-2x"
                  style="color: #00adb5"
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
              <h2 class="font-bold text-[14px] text-primary">${language.name}</h2>
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
              <h2 class="font-bold text-[14px] text-primary">${tool.name}</h2>
            </div>`;

      document.getElementById("tools").innerHTML += card;
    });
  });

// posters
fetch("/dist/json/posters.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((poster) => {
      let posterCard = `
            <div class="rounded-lg min-w-[180px] max-md:min-w-[100px] snap-start">

              <img
                src="${poster.image}"
                alt="poster"
                class="w-64 rounded-lg text-white object-cover"
              />
            </div>
          </div>
      `;

      document.getElementById("postersProject").innerHTML += posterCard;
    });
  });

// menu hamburger button
const hamButton = document.querySelector("#hamburger-button");
const hamOpen = document.querySelector("#hamburger-open");
const hamClose = document.querySelector("#hamburger-close");
const navMenu = document.querySelector("#nav-menu");
const hover = document.querySelector("#hover");

hamButton.addEventListener("click", function () {
  hamOpen.classList.toggle("hidden");
  hamClose.classList.toggle("hidden");

  if (navMenu.classList.contains("menu-closed")) {
    navMenu.classList.remove("menu-closed");
    navMenu.classList.add("menu-open");
  } else {
    navMenu.classList.remove("menu-open");
    navMenu.classList.add("menu-closed");
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
    cvButton.classList.remove("border-primary");
    cvButton.classList.add("border-white");

    cvButton.classList.remove("text-primary");
    cvButton.classList.add("text-white");
    if (window.innerWidth > 1024) {
      navList.classList.add("text-white");
      navList.classList.remove("text-primary");
    }

    if (window.innerWidth < 1024) {
      header.classList.add("scrolled");
    }

    if (window.innerWidth > 1024) {
      header.classList.add("scrolled2");
    }
  } else {
    header.classList.remove("scrolled");
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
// window.addEventListener("scroll", () => {
//   const skillCards = document.querySelectorAll(".skillCard");
//   skillCards.forEach((skillCard) => {
//     const skillCardPosition = skillCard.offsetTop;
//     const scrollPosition = window.scrollY + window.innerHeight;

//     if (scrollPosition > skillCardPosition) {
//       skillCard.classList.add("animateSkill");
//     } else {
//       skillCard.classList.remove("animateSkill");
//     }
//   });
// });

// contact button when clicked go to contact section

const contactButton = document.querySelector("#contactMe");

contactButton.addEventListener("click", () => {
  const contactSection = document.querySelector("#contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
});

// slider

let index = 0;
const slider = document.getElementById("slider");
const slideInterval = 6000;
const totalSlides = slider.children.length;
const nextButton = document.getElementById("next-image");
const prevButton = document.getElementById("prev-image");

function autoSlide() {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 20}%)`;
  slider.style.transition = "transform 1.3s ease-in-out";
}

function nextSlide() {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 20}%)`;
  slider.style.transition = "transform 1.3s ease-in-out";
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = totalSlides - 1;
  }
  slider.style.transform = `translateX(-${index * 20}%)`;
  slider.style.transition = "transform 1.3s ease-in-out";
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

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
