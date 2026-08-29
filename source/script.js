(function () {
  const lazyVideos = document.querySelectorAll("video[data-lazy-video]");
  if (!lazyVideos.length) return;

  const loadVideo = (video) => {
    if (video.dataset.loaded === "true") return;

    video.querySelectorAll("source[data-src]").forEach((source) => {
      source.src = source.dataset.src;
      source.removeAttribute("data-src");
    });

    if (video.dataset.src) {
      video.src = video.dataset.src;
      video.removeAttribute("data-src");
    }

    video.dataset.loaded = "true";
    video.load();
  };

  if (!("IntersectionObserver" in window)) {
    lazyVideos.forEach((video) => {
      loadVideo(video);
      video.play().catch(() => {});
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          loadVideo(video);
          video.play().catch(() => {});
        } else if (video.dataset.loaded === "true") {
          video.pause();
        }
      });
    },
    { rootMargin: "600px 0px" }
  );

  lazyVideos.forEach((video) => observer.observe(video));
})();

(function () {
  const containerSelector = ".mainContent, .previewThumbnail";

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgModalImg");
  if (!modal || !modalImg) return;

  let scrollYBeforeLock = 0;
  let isScrollLocked = false;

  const lockScroll = () => {
    if (isScrollLocked) return;

    scrollYBeforeLock = window.scrollY || window.pageYOffset || 0;
    isScrollLocked = true;

    document.documentElement.classList.add("is-scroll-locked");
    document.body.classList.add("is-scroll-locked");
    document.body.style.top = `-${scrollYBeforeLock}px`;
  };

  const unlockScroll = () => {
    if (!isScrollLocked) return;

    isScrollLocked = false;

    document.documentElement.classList.remove("is-scroll-locked");
    document.body.classList.remove("is-scroll-locked");
    document.body.style.top = "";

    window.scrollTo(0, scrollYBeforeLock);
  };

  const updateScrollLock = () => {
    const shouldLock =
      modal.classList.contains("is-open") ||
      document.body.classList.contains("is-loading") ||
      document.body.classList.contains("menuOpen");

    if (shouldLock) lockScroll();
    else unlockScroll();
  };

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    updateScrollLock();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    updateScrollLock();
  }

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

  window.__updateGlobalScrollLock = updateScrollLock;
})();

(function () {
  const overlay = document.getElementById("loadingOverlay");
  if (!overlay) return;

  let isHidden = false;
  let timeoutId = null;

  const updateScrollLock = window.__updateGlobalScrollLock || (() => {});

  const preventTouchMoveWhileLoading = (e) => {
    if (document.body.classList.contains("is-loading")) {
      e.preventDefault();
    }
  };

  const show = () => {
    isHidden = false;
    overlay.classList.add("is-visible");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-loading");
    updateScrollLock();

    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      hide();
    }, 8000);
  };

  const hide = () => {
    if (isHidden) return;
    isHidden = true;

    overlay.classList.remove("is-visible");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-loading");
    updateScrollLock();

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  document.addEventListener("touchmove", preventTouchMoveWhileLoading, {
    passive: false,
  });

  show();

  window.addEventListener("load", hide);

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

  const updateScrollLock = window.__updateGlobalScrollLock || (() => {});

  const openMenu = () => {
    document.body.classList.add("menuOpen");
    overlay.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    updateScrollLock();
  };

  const closeMenu = () => {
    document.body.classList.remove("menuOpen");
    overlay.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    updateScrollLock();
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
