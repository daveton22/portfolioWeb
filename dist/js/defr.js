const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hide");
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll(".hide");
