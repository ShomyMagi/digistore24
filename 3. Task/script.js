document.querySelectorAll(".accordion").forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const body = accordion.querySelector(".accordion-body");

  header.addEventListener("click", toggle);
  header.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  function toggle() {
    const expanded = header.getAttribute("aria-expanded") === "true";
    header.setAttribute("aria-expanded", String(!expanded));
    body.classList.toggle("open", !expanded);
  }
});
