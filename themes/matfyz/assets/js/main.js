const initMenu = () => {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.getElementById("site-menu");
  const menuClose = menu ? menu.querySelector("[data-menu-close]") : null;

  const setMenuState = (isOpen) => {
    document.body.classList.toggle("menu-open", isOpen);
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
    if (menu) {
      menu.setAttribute("data-open", isOpen ? "true" : "false");
    }
  };

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = document.body.classList.contains("menu-open");
      setMenuState(!isOpen);
    });

    if (menuClose) {
      menuClose.addEventListener("click", () => setMenuState(false));
    }

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMenu);
} else {
  initMenu();
}


/* Automatic closing of collapsible sections, so that only one is open (slightly laggy) */
document.querySelectorAll('.collapsible-section').forEach(details => {
  details.addEventListener('toggle', function () {
    if (!this.open) return;

    const oldTop = this.getBoundingClientRect().top;

    document.querySelectorAll('.collapsible-section[open]').forEach(other => {
      if (other !== this) {
        other.open = false;
      }
    });

    const newTop = this.getBoundingClientRect().top;

    window.scrollBy({
      top: newTop - oldTop,
      left: 0,
      behavior: 'instant'
    });
  });
});