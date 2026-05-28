(() => {
  // <stdin>
  var initMenu = () => {
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
})();
//# sourceMappingURL=main.js.map
