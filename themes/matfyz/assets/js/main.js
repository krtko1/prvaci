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


/* Automatic closing of collapsible sections, so that only one is open */
let oldTop;

document.querySelectorAll('.collapsible-section').forEach(details => {

  details.querySelector('summary').addEventListener('click', function (e) {
    if (details.open) return;
  
    e.preventDefault(); // stop native toggle until we finish
  
    const oldTop = details.getBoundingClientRect().top;
  
    document.querySelectorAll('.collapsible-section[open]').forEach(other => {
      if (other !== details) {
        other.open = false;
      }
    });
  
    requestAnimationFrame(() => {
      details.open = true;
  
      const newTop = details.getBoundingClientRect().top;
  
      window.scrollBy({
        top: newTop - oldTop,
        left: 0,
        behavior: 'auto'
      });
    });
  });

  details.addEventListener('toggle', function () {
    if (!this.open) return;

    const newTop = this.getBoundingClientRect().top;

    window.scrollBy({
      top: newTop - oldTop,
      left: 0,
      behavior: 'auto'
    });
  });
});