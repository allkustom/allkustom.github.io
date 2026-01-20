(function () {
  const containerSelector = ".mainContent, .previewThumbnail";

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgModalImg");
  if (!modal || !modalImg) return;

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  // 여러 컨테이너를 한번에 순회
  const containers = document.querySelectorAll(containerSelector);
  containers.forEach((container) => {
    container.querySelectorAll("img").forEach((img) => {
      if (img.classList.contains("no-lightbox")) return;

      img.classList.add("lb-zoomable");

      img.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const full = img.getAttribute("data-full") || img.currentSrc || img.src;
        openModal(full, img.alt);
      });
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]") || e.target === modalImg) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();

(function () {
  const overlay = document.getElementById("loadingOverlay");
  if (!overlay) return;

  const show = () => overlay.classList.add("is-visible");
  const hide = () => overlay.classList.remove("is-visible");

  show();

  window.addEventListener("load", () => {
    hide();
  });

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;

    if (a.target === "_blank") return;
    if (a.hasAttribute("download")) return;

    if (href.startsWith("#")) return;

    if (/^https?:\/\//i.test(href)) {
      try {
        const url = new URL(href);
        if (url.origin !== window.location.origin) return;
      } catch {
        return;
      }
    }

    try {
      const dest = new URL(href, window.location.href);
      if (dest.href === window.location.href) return;
    } catch {}

    show();
  });

  window.addEventListener("pageshow", (e) => {
    if (e.persisted) hide();
  });
})();

(function () {
  const btn = document.getElementById("menuToggle");
  const panel = document.getElementById("sidePanel");
  const overlay = document.getElementById("menuOverlay");

  if (!btn || !panel || !overlay) return;

  const openMenu = () => {
    document.body.classList.add("menuOpen");
    overlay.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    document.body.classList.remove("menuOpen");
    overlay.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    if (document.body.classList.contains("menuOpen")) closeMenu();
    else openMenu();
  };

  btn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  panel.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    closeMenu();
  });

  const mq = window.matchMedia("(max-width: 700px)");
  mq.addEventListener("change", (e) => {
    if (!e.matches) closeMenu();
  });
})();


// "Open Personal Archive" Button control + localstorage state memory
(function () {
  const btn = document.getElementById("personalButton");
  if (!btn) return;

  const KEY = "personalArchiveOpen";
  const openText = "Open Personal Archive";
  const closeText = "Close Personal Archive";

  const setState = (isOpen) => {
    document.body.classList.toggle("personalOpen", isOpen);
    btn.textContent = isOpen ? closeText : openText;
    btn.setAttribute("aria-expanded", String(isOpen));
    localStorage.setItem(KEY, isOpen ? "1" : "0");
  };

  const saved = localStorage.getItem(KEY);
  const initialOpen = saved === "1";
  setState(initialOpen);

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = document.body.classList.contains("personalOpen");
    setState(!isOpen);
  });
})();