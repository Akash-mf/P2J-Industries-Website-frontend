// Shared header / footer behaviour for the navy theme (index.html, contact.html)
(function () {
  const header = document.querySelector(".site-header");

  // Footer year
  document.querySelectorAll(".js-year").forEach(el => el.textContent = new Date().getFullYear());

  // Mobile menu
  const toggle = document.getElementById("menuToggle");
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
  }

  // Dropdowns open on tap in mobile view
  document.querySelectorAll(".has-sub > a").forEach(link => {
    link.addEventListener("click", e => {
      if (window.matchMedia("(max-width:1024px)").matches) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });

  // Search panel
  const searchBtn = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  if (searchBtn && searchPanel) {
    searchBtn.addEventListener("click", () => {
      searchPanel.classList.toggle("open");
      if (searchPanel.classList.contains("open")) searchPanel.querySelector("input").focus();
    });
  }

  // Newsletter (client-side only — connect your own endpoint when ready)
  const nl = document.getElementById("newsletterForm");
  if (nl) {
    nl.addEventListener("submit", e => {
      e.preventDefault();
      document.getElementById("nlNote").textContent = "Thanks! You're subscribed for updates.";
      nl.reset();
    });
  }
})();

// Legal pages: highlight the section being read in the "On this page" list
(function () {
  const links = document.querySelectorAll(".toc-card a");
  if (!links.length || !("IntersectionObserver" in window)) return;
  const map = new Map([...links].map(a => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove("on"));
        const a = map.get(e.target.id); if (a) a.classList.add("on");
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
})();
