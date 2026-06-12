const legacyRoutes = {
  "#solucoes": "solucoes.html",
  "#sistemas": "sistemas.html",
  "#erp": "erp.html",
  "#segmentos": "segmentos.html",
  "#sobre": "sobre.html",
  "#contato": "contato.html",
};

if (legacyRoutes[window.location.hash]) {
  window.location.replace(legacyRoutes[window.location.hash]);
}

const currentPage = document.body.dataset.page;

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.classList.toggle("active", link.dataset.page === currentPage);
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
});
