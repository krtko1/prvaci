(() => {
  // <stdin>
  var initMenu = () => {
    const menuToggle = document.querySelector("[data-menu-toggle]");
    const menu = document.getElementById("site-menu");
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
      menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
      });
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 960) {
          setMenuState(false);
        }
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
