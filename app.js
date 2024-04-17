function smoothScrollToSection(section) {
  document.querySelectorAll(`a[href^="#${section}"]`).forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

['about', 'empty-space', 'project', 'contact'].forEach(section => {
  smoothScrollToSection(section);
});