/* ==========================================================================
   DONATION LINKS — the one place to configure donations.
   Paste a hosted payment URL (Stripe Payment Link, PayPal, GoFundMe, etc.)
   into any value below. Empty string = button shows "Coming soon" and is
   disabled. No card data is ever collected on this site; buttons simply
   link out to the provider's hosted page.
   ========================================================================== */
const DONATION_LINKS = {
  solace: {
    stripe: "",   // e.g. "https://donate.stripe.com/xxxxxxxx"
    paypal: "",   // e.g. "https://www.paypal.com/donate/?hosted_button_id=XXXX"
    gofundme: "", // e.g. "https://www.gofundme.com/f/your-campaign"
  },
  personal: {
    stripe: "",   // e.g. "https://buy.stripe.com/xxxxxxxx"
    paypal: "",   // e.g. "https://www.paypal.me/yourname"
  },
};

(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // Wire up donation buttons: <a data-donate="solace.stripe">…</a>
  document.querySelectorAll("[data-donate]").forEach(function (el) {
    var parts = el.getAttribute("data-donate").split(".");
    var url = (DONATION_LINKS[parts[0]] || {})[parts[1]] || "";
    var label = el.querySelector("[data-label]");
    if (url) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.removeAttribute("aria-disabled");
      el.removeAttribute("tabindex");
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      el.setAttribute("role", "link");
      if (label) label.textContent = label.textContent + " (coming soon)";
    }
  });

  // Sticky header shadow
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Reveal-on-scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
