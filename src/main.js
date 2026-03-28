const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#site-menu");
const yearEl = document.querySelector("#year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
