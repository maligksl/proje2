// Mobil menüyü açıp kapatır.
const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    const nextOpen = !isOpen;
    menuToggle.setAttribute("aria-expanded", String(nextOpen));
    menuToggle.setAttribute("aria-label", nextOpen ? "Menüyü kapat" : "Menüyü aç");
    siteMenu.classList.toggle("is-open", nextOpen);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Menüyü aç");
      siteMenu.classList.remove("is-open");
      menuToggle.focus();
    }
  });
}

// Görsel yüklenemezse bozuk ikon yerine tasarımın renkli yedek alanını gösterir.
document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.classList.add("image-failed");
  });
});

// İçerikler sayfasında yalnızca kart başlıklarına göre arama yapar.
const searchInput = document.querySelector("#title-search");
const clearButton = document.querySelector("#clear-search");
const resultCount = document.querySelector("#result-count");
const emptyMessage = document.querySelector("#empty-message");
const contentCards = document.querySelectorAll(".destination-card");

if (searchInput && clearButton && resultCount && emptyMessage && contentCards.length > 0) {
  const normalizeSearchText = (text) => text
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/[İIı]/g, "i");

  const filterCards = () => {
    // trim() boşlukları kaldırır, I/İ farkını da dikkate alan normalizasyon harf duyarsızlığı sağlar.
    const searchTerm = normalizeSearchText(searchInput.value);
    let visibleCount = 0;

    contentCards.forEach((card) => {
      const heading = card.querySelector("h2");
      if (!heading) return;
      const title = normalizeSearchText(heading.textContent);
      const matches = title.includes(searchTerm);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    resultCount.textContent = `${visibleCount} içerik gösteriliyor`;
    emptyMessage.hidden = visibleCount !== 0;
  };

  // input olayı, kullanıcı her yazdığında filtrelemeyi çalıştırır.
  searchInput.addEventListener("input", filterCards);
  searchInput.addEventListener("search", filterCards);

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    filterCards();
    searchInput.focus();
  });

  filterCards();
}
