(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const enc = encodeURIComponent;
  const wa = (t) => `https://wa.me/${CONFIG.whatsappNumber}${t ? "?text=" + enc(t) : ""}`;
  const tel = () => "tel:+" + CONFIG.whatsappNumber;

  /* image with fallback: shows a mountain placeholder when the URL is empty, YOUR_*, or broken */
  const pic = (key, alt) => {
    const u = IMAGES[key] || "";
    const bad = !u || u.startsWith("YOUR_");
    return `<figure class="pic${bad ? " missing" : ""}">${bad ? "" :
      `<img src="${u}" alt="${alt}" loading="lazy" onerror="this.parentNode.classList.add('missing')">`}<figcaption>${key}</figcaption></figure>`;
  };

  const icons = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 15v-3l2-5h14l2 5v3M3 15h18M3 15v3h3v-3M18 15v3h3v-3"/><circle cx="7.500" cy="15" r="1"/><circle cx="16.500" cy="15" r="1"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="2.500"/><circle cx="18" cy="18" r="2.500"/><path d="M8.500 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.500"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5h16v11H9l-5 4z"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.500 4-6.500 8-6.500s7 2 8 6.500"/></svg>',
    seat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3v11h8l3 7M7 14H5"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.500" cy="8.500" r="1.200"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3 2.700 5.600 6.100.8-4.500 4.300 1.100 6.100L12 17l-5.400 2.800 1.100-6.100L3.200 9.400l6.100-.8z"/></svg>',
    swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8h14l-3-3M20 16H6l3 3"/></svg>'
  };
  window.__icons = icons;

  /* ---------- header & footer ---------- */
  const pages = [["index.html", "Home"], ["fleet.html", "Fleet"], ["destinations.html", "Destinations"], ["packages.html", "Packages"], ["contact.html", "Contact"]];
  const current = location.pathname.split("/").pop() || "index.html";
  const logoSvg = '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linejoin="round"><path d="M3 32 15 12l7 11 5-7 10 16z"/><path d="m11.500 20 3.500 3 3-3"/></svg>';

  const header = $("#site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<div class="wrap nav">
      <a class="logo" href="index.html" aria-label="${CONFIG.brand} home">${logoSvg}<span>${CONFIG.brand}</span></a>
      <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button>
      <nav class="nav-links" id="nav-links">
        ${pages.map(([h, t]) => `<a href="${h}"${h === current ? ' class="active"' : ""}>${t}</a>`).join("")}
        <a class="btn btn-gold" href="${wa("Hi! I'd like to book a ride in Kashmir.")}" target="_blank" rel="noopener">WhatsApp us</a>
      </nav></div>`;
    const burger = $(".burger", header), links = $("#nav-links");
    const setMenu = (open) => { links.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); };
    burger.addEventListener("click", () => setMenu(!links.classList.contains("open")));
    links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
    const onScroll = () => header.classList.toggle("solid", scrollY > 40);
    onScroll(); addEventListener("scroll", onScroll, { passive: true });
  }

  const footer = $("#site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `<div class="wrap"><div class="foot">
      <div><a class="logo" href="index.html">${logoSvg}<span>${CONFIG.brand}</span></a>
        <p>Tourist cabs and trip planning in Kashmir, run by local drivers.</p></div>
      <div><h4>Explore</h4><ul>${pages.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="${tel()}">${CONFIG.phoneDisplay}</a></li>
        <li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>
        <li>${CONFIG.address}</li><li>${CONFIG.hours}</li></ul></div>
      <div><h4>Follow & book</h4><ul>
        <li><a href="${CONFIG.social.instagram}" target="_blank" rel="noopener">Instagram</a></li>
        <li><a href="${CONFIG.social.youtube}" target="_blank" rel="noopener">YouTube</a></li>
        <li><a href="${CONFIG.social.facebook}" target="_blank" rel="noopener">Facebook</a></li>
        <li><a href="${wa("Hi! I'd like to book a ride in Kashmir.")}" target="_blank" rel="noopener">Book on WhatsApp</a></li></ul></div>
      </div>
      <div class="copy"><span>© ${new Date().getFullYear()} ${CONFIG.brand}. All rights reserved.</span><span>Made in Kashmir</span></div></div>`;
    document.body.insertAdjacentHTML("beforeend",
      `<a class="wa-float" href="${wa("Hi! I'd like to book a ride in Kashmir.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11 19.800L3 29l6.400-2A13 13 0 1 0 16 3zm0 23.700a10.700 10.700 0 0 1-5.500-1.500l-.4-.2-3.800 1.200 1.200-3.700-.3-.4A10.700 10.700 0 1 1 16 26.700zm5.900-8c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.700 8.700 0 0 1-4.300-3.800c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.3-.6-.5-.5-.7-.5h-.6a1.200 1.200 0 0 0-.9.400 3.700 3.700 0 0 0-1.100 2.700 6.400 6.400 0 0 0 1.300 3.400c.2.200 2.300 3.500 5.600 4.900 2.100.9 2.900.9 3.900.8a3.300 3.300 0 0 0 2.200-1.500 2.700 2.700 0 0 0 .2-1.500c-.1-.2-.3-.3-.6-.4z"/></svg></a>`);
  }

  /* ---------- text / link bindings ---------- */
  $$("[data-bind]").forEach((el) => {
    el.textContent = el.dataset.bind.split(".").reduce((o, k) => (o ? o[k] : ""), CONFIG) || "";
  });
  $$("[data-wa]").forEach((a) => { a.href = wa(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-call]").forEach((a) => { a.href = tel(); });
  $$("[data-img]").forEach((el) => { el.outerHTML = pic(el.dataset.img, el.dataset.alt || el.dataset.img); });

  /* ---------- renderers ---------- */
  const R = {
    destinations(el, detail) {
      const list = el.dataset.limit ? DESTINATIONS.slice(0, +el.dataset.limit) : DESTINATIONS;
      el.innerHTML = list.map((d, i) => `<article class="dest reveal${detail ? " detail" : ""}" id="${d.id}" style="--i:${i}">
        ${pic(d.image, d.name)}<div class="dest-body"><h3>${d.name}</h3><p>${d.desc}</p>
        ${detail ? `<ul class="more">${d.more.map((m) => `<li>${m}</li>`).join("")}</ul>` : ""}
        ${detail ? `<a class="btn btn-gold" href="contact.html?destination=${enc(d.name)}#book">Plan a trip to ${d.name}</a>`
                 : `<a class="btn btn-line" href="destinations.html#${d.id}">Explore ${d.name}</a>`}</div></article>`).join("");
    },
    fleet(el, detail) {
      el.innerHTML = FLEET.map((c, i) => `<article class="car reveal" style="--i:${i}">
        <div class="ph">${pic(c.image, c.name)}</div><div class="car-body"><h3>${c.name}</h3>
        <div class="chips"><span>Passengers: ${c.passengers}</span><span>Luggage: ${c.luggage}</span></div>
        <p>${c.desc}</p>
        ${detail ? `<ul class="specs">${c.specs.map((s) => `<li>${s}</li>`).join("")}</ul>` : ""}
        <a class="btn btn-dark" href="contact.html?vehicle=${enc(c.name)}#book">Book Now</a></div></article>`).join("");
    },
    packages(el, detail) {
      el.innerHTML = PACKAGES.map((p, i) => `<article class="pkg reveal" id="${p.id}" style="--i:${i}">
        <div class="ph">${pic(p.image, p.name)}</div><div class="pkg-body"><h3>${p.name}</h3><p>${p.desc}</p>
        <ul class="specs">${(detail ? p.includes : p.includes.slice(0, 3)).map((s) => `<li>${s}</li>`).join("")}</ul>
        <div class="meta"><span class="price">${p.price}</span><span class="dur">${p.duration}</span></div>
        <a class="btn btn-dark" href="contact.html?package=${enc(p.name)}#book">Book this package</a></div></article>`).join("");
    },
    gallery(el) {
      el.innerHTML = GALLERY.map((g, i) => `<button class="gal ${g.size || ""} reveal" style="--i:${i % 4}" data-i="${i}" aria-label="Open photo: ${g.alt}">${pic(g.image, g.alt)}</button>`).join("");
      const lb = document.createElement("div");
      lb.className = "lightbox"; lb.innerHTML = '<button aria-label="Close">×</button><img alt="">';
      document.body.appendChild(lb);
      const close = () => lb.classList.remove("on");
      lb.addEventListener("click", close);
      document.addEventListener("keydown", (e) => e.key === "Escape" && close());
      el.addEventListener("click", (e) => {
        const b = e.target.closest(".gal"); if (!b) return;
        const g = GALLERY[b.dataset.i], u = IMAGES[g.image];
        if (!u || u.startsWith("YOUR_")) return;
        const im = $("img", lb); im.src = u; im.alt = g.alt; lb.classList.add("on");
      });
    },
    testimonials(el) {
      el.innerHTML = TESTIMONIALS.map((t, i) => `<figure class="quote reveal" style="--i:${i}">
        ${t.sample ? '<span class="tag">Sample</span>' : ""}<p>${t.text}</p><b>${t.name}</b><small>${t.place}</small></figure>`).join("");
    }
  };
  $$("[data-render]").forEach((el) => R[el.dataset.render] && R[el.dataset.render](el, el.hasAttribute("data-detail")));
  $$("[data-icon]").forEach((el) => { el.innerHTML = icons[el.dataset.icon] || ""; });

  /* ---------- scroll reveal ---------- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((r) => io.observe(r));
  } else reveals.forEach((r) => r.classList.add("in"));

  /* ---------- hero parallax ---------- */
  const layers = $$("[data-speed]");
  if (layers.length && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let tick = false;
    addEventListener("scroll", () => {
      if (tick) return; tick = true;
      requestAnimationFrame(() => {
        const y = Math.min(scrollY, innerHeight);
        layers.forEach((l) => (l.style.transform = `translateY(${y * l.dataset.speed}px)`));
        tick = false;
      });
    }, { passive: true });
  }

  /* ---------- booking form -> WhatsApp ---------- */
  const form = $("#booking-form");
  if (form) {
    const veh = $("#vehicle");
    veh.innerHTML = '<option value="">No preference</option>' + FLEET.map((c) => `<option>${c.name}</option>`).join("");
    $("#dest-list").innerHTML = [...DESTINATIONS.map((d) => d.name), ...PACKAGES.map((p) => p.name)].map((n) => `<option value="${n}">`).join("");
    const q = new URLSearchParams(location.search);
    if (q.get("vehicle")) veh.value = q.get("vehicle");
    if (q.get("destination") || q.get("package")) $("#destination").value = q.get("destination") || q.get("package");
    const d = $("#date"); d.min = new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = (id) => ($("#" + id).value || "").trim() || "-";
      const msg = [
        `*New booking request – ${CONFIG.brand}*`, "",
        `*Name:* ${v("name")}`, `*Phone:* ${v("phone")}`, `*Pickup:* ${v("pickup")}`,
        `*Destination:* ${v("destination")}`, `*Travel date:* ${v("date")}`,
        `*Passengers:* ${v("passengers")}`, `*Preferred vehicle:* ${v("vehicle")}`,
        `*Requirements:* ${v("notes")}`
      ].join("\n");
      window.open(wa(msg), "_blank", "noopener");
    });
  }

  const map = document.getElementById("map");
  if (map && CONFIG.mapsEmbedUrl) map.innerHTML = `<iframe src="${CONFIG.mapsEmbedUrl}" loading="lazy" title="Our location on Google Maps" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})();
