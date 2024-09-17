fetch("/dist/json/myproject.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      let card = `<div
            class="w-[24em] h-auto p-4 scroll relative"
          >
            <div class="bg-[#E84545] rounded-lg">
              <img
                src="${project.image}"
                alt="${project.title}"
                class="w-full h-[200px] rounded-lg text-white mix-blend-darken object-cover"
              />
            </div>

            <div class="mt-2">
              <p class="text-gray-200 text-[13px]">
                ${project.description}
              </p>
              <a
                class="text-[#E84545] font-semibold hover:opacity-0.8"
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
                class="mx-3 hover:scale-[1.2] transition-transform duration-200 w-[40px] h-[40px] max-md:w-[35px] max-md:h-[35px] bg-[#E84545] rounded-lg flex justify-center items-center"
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

const contactMe = document.querySelector("#contactMe");
const whatsapp = document.querySelector("#whatsapp");

contactMe.addEventListener("mouseover", () => {
  whatsapp.classList.remove("hidden");
  whatsapp.classList.add("block");
});

contactMe.addEventListener("mouseout", () => {
  whatsapp.classList.remove("block");
  whatsapp.classList.add("hidden");
});

// header navbar scroll will change bg color
document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const cvDiv = document.querySelector("#cvButton span");
  const cvButton = document.querySelector("#cvButton");

  if (window.scrollY > 20) {
    // button
    if (window.innerWidth >= 768) {
      header.classList.add("scrolled2");
      header.classList.remove("scrolled");
      // cv Button
      cvDiv.classList.remove("bg-[#2B2E4A]");
      cvDiv.classList.add("bg-[#E84545]");
      cvButton.classList.remove("border-[#2B2E4A]");
      cvButton.classList.add("border-[#E84545]");
    } else {
      header.classList.add("scrolled");
      header.classList.remove("scrolled2");

      cvDiv.classList.remove("bg-[#2B2E4A]");
      cvDiv.classList.add("bg-[#E84545]");
      cvButton.classList.remove("border-[#2B2E4A]");
      cvButton.classList.add("border-[#E84545]");
    }

    // ul
  } else {
    header.classList.remove("scrolled", "scrolled2");

    cvDiv.classList.remove("bg-[#E84545]");
    cvDiv.classList.add("bg-[#2B2E4A]");
    cvButton.classList.remove("border-[#E84545]");
    cvButton.classList.add("border-[#2B2E4A]");
  }
});

// Scroll animation for skill cards
let skillsCards = document.querySelectorAll(".skillCard");
window.onscroll = () => {
  let top = window.scrollY;
  let windowHeight = window.innerHeight;

  skillsCards.forEach((skillCard) => {
    let offset = skillCard.offsetTop;
    let height = skillCard.offsetHeight;

    if (top + windowHeight >= offset && top < offset + height) {
      skillCard.classList.add("animateSkill");
    } else {
      skillCard.classList.remove("animateSkill");
    }
  });
};

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
