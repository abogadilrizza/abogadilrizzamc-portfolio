
/* MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

  });
}


/* HIGHLIGHT CURRENT PAGE */

// Match clean URLs, legacy .html URLs, and optional trailing slashes.
const normalizePath = pathname => {
  const path = pathname.replace(/\/+$/, "").replace(/\.html$/, "");
  return path === "" || path === "/index" ? "/" : path;
};

const currentPage = normalizePath(window.location.pathname);

document.querySelectorAll(".nav-links a").forEach(link => {

  const linkPath = new URL(link.getAttribute("href"), window.location.href).pathname;

  if (normalizePath(linkPath) === currentPage) {
    link.classList.add("current-page");
    link.setAttribute("aria-current", "page");
  }

});
