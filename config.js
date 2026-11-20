/* ==========================================================
   EDIT THIS FILE ONLY — phone, images, vehicles, prices, text.
   ========================================================== */

const CONFIG = {
  brand: "Your Brand Name",                 // shown in header, footer, WhatsApp messages
  whatsappNumber: "919999999999",           // country code + number, digits only (no +, spaces or dashes)
  phoneDisplay: "+91 99999 99999",          // how the number is shown on the site
  email: "hello@example.com",
  address: "Your address, Srinagar, Jammu & Kashmir",
  hours: "Daily, 7:00 AM – 10:00 PM",       // edit
  // Google Maps: open your place > Share > Embed a map > copy ONLY the src="..." link here
  mapsEmbedUrl: "",
  social: { instagram: "#", youtube: "#", facebook: "#" },
  owner: {
    name: "Your Friend's Name",
    title: "Local driver & trip host",
    bio: "Born and raised in Kashmir, I know every road, viewpoint and shortcut. Write a short, honest introduction here: how long you have been driving, the places you love, and how you look after your guests."
  }
};

/* ---------- IMAGES: paste a URL (or a file path like "img/hero.jpg") ----------
   While a value starts with YOUR_ the site shows a clean mountain placeholder
   with the image name on it, so nothing looks broken.                          */
const IMAGES = {
  hero: "YOUR_HERO_IMAGE_URL",
  owner: "YOUR_OWNER_IMAGE_URL",
  tourists: "YOUR_TOURISTS_IMAGE_URL",
  /* vehicles */
  sedan: "YOUR_SEDAN_IMAGE_URL",
  suv: "YOUR_SUV_IMAGE_URL",
  innova: "YOUR_INNOVA_IMAGE_URL",
  crysta: "YOUR_INNOVA_CRYSTA_IMAGE_URL",
  tempo: "YOUR_TEMPO_TRAVELLER_IMAGE_URL",
  /* destinations */
  gulmarg: "YOUR_GULMARG_IMAGE_URL",
  pahalgam: "YOUR_PAHALGAM_IMAGE_URL",
  sonamarg: "YOUR_SONAMARG_IMAGE_URL",
  srinagar: "YOUR_SRINAGAR_IMAGE_URL",
  doodhpathri: "YOUR_DOODHPATHRI_IMAGE_URL",
  gurez: "YOUR_GUREZ_IMAGE_URL",
  /* packages (reuse destination images if you like) */
  pkgGulmarg: "YOUR_PACKAGE_GULMARG_IMAGE_URL",
  pkgPahalgam: "YOUR_PACKAGE_PAHALGAM_IMAGE_URL",
  pkgSonamarg: "YOUR_PACKAGE_SONAMARG_IMAGE_URL",
  pkgSightseeing: "YOUR_PACKAGE_SIGHTSEEING_IMAGE_URL",
  pkgComplete: "YOUR_PACKAGE_COMPLETE_IMAGE_URL",
  /* gallery */
  g1: "YOUR_GALLERY_1_LANDSCAPE_URL",
  g2: "YOUR_GALLERY_2_TOURISTS_URL",
  g3: "YOUR_GALLERY_3_CAR_URL",
  g4: "YOUR_GALLERY_4_MOUNTAIN_ROAD_URL",
  g5: "YOUR_GALLERY_5_SNOW_URL",
  g6: "YOUR_GALLERY_6_VALLEY_URL",
  g7: "YOUR_GALLERY_7_TOURISTS_URL",
  g8: "YOUR_GALLERY_8_LAKE_URL"
};

/* ---------- FLEET ---------- (capacities are typical figures — edit to match your cars) */
const FLEET = [
  { name: "Sedan", image: "sedan", passengers: "Up to 4", luggage: "2–3 bags",
    desc: "A comfortable choice for couples and small families on city and valley routes.",
    specs: ["Air conditioning", "Comfortable seating", "Best for 2–4 guests", "Edit this list"] },
  { name: "SUV", image: "suv", passengers: "Up to 6", luggage: "3–4 bags",
    desc: "Extra room and ground clearance for hill roads and longer days out.",
    specs: ["Air conditioning", "Higher ground clearance", "Best for 4–6 guests", "Edit this list"] },
  { name: "Innova", image: "innova", passengers: "Up to 7", luggage: "3–4 bags",
    desc: "A family favourite for mixed groups who want space and a smooth ride.",
    specs: ["Air conditioning", "Three seating rows", "Best for 5–7 guests", "Edit this list"] },
  { name: "Innova Crysta", image: "crysta", passengers: "Up to 7", luggage: "4–5 bags",
    desc: "A more premium cabin for guests who want extra comfort on long routes.",
    specs: ["Air conditioning", "Premium interior", "Best for 5–7 guests", "Edit this list"] },
  { name: "Tempo Traveller", image: "tempo", passengers: "12 or more", luggage: "Large group luggage",
    desc: "Made for big families and friend groups travelling together.",
    specs: ["Air conditioning", "Group seating", "Best for 8+ guests", "Edit this list"] }
];

/* ---------- DESTINATIONS ---------- */
const DESTINATIONS = [
  { id: "gulmarg", name: "Gulmarg", image: "gulmarg",
    desc: "Alpine meadows, the famous gondola and deep winter snow.",
    more: ["Gulmarg Gondola", "Snow activities in winter", "Wildflower meadows in summer"] },
  { id: "pahalgam", name: "Pahalgam", image: "pahalgam",
    desc: "River valleys, pine forests and gentle pony trails along the Lidder.",
    more: ["Lidder River", "Aru Valley", "Betaab Valley"] },
  { id: "sonamarg", name: "Sonamarg", image: "sonamarg",
    desc: "A broad mountain valley beneath glaciers, on the road toward Ladakh.",
    more: ["Thajiwas Glacier", "Sindh River views", "Pony rides to the glacier"] },
  { id: "srinagar", name: "Srinagar", image: "srinagar",
    desc: "Dal Lake, shikara rides, Mughal gardens and old-city lanes.",
    more: ["Dal Lake & shikara", "Mughal Gardens", "Old city & local markets"] },
  { id: "doodhpathri", name: "Doodhpathri", image: "doodhpathri",
    desc: "A quiet green meadow in Budgam with a clear stream and pine slopes.",
    more: ["Open meadows", "Shaliganga stream", "Easy day trip from Srinagar"] },
  { id: "gurez", name: "Gurez Valley", image: "gurez",
    desc: "A remote border valley of river bends, villages and big mountain views.",
    more: ["Kishanganga river", "Habba Khatoon peak", "Check current travel rules before going"] }
];

/* ---------- PACKAGES ---------- (no fake prices: edit price/duration/inclusions) */
const PACKAGES = [
  { id: "srinagar-gulmarg", name: "Srinagar to Gulmarg", image: "pkgGulmarg", duration: "1 day (edit)",
    price: "₹ ____ (edit)", desc: "A day trip from Srinagar to the meadows and gondola of Gulmarg.",
    includes: ["Pickup & drop-off", "Vehicle and driver", "Flexible stops", "Edit this list"] },
  { id: "srinagar-pahalgam", name: "Srinagar to Pahalgam", image: "pkgPahalgam", duration: "1–2 days (edit)",
    price: "₹ ____ (edit)", desc: "River valleys and forest roads, with time at Aru and Betaab.",
    includes: ["Pickup & drop-off", "Vehicle and driver", "Flexible stops", "Edit this list"] },
  { id: "srinagar-sonamarg", name: "Srinagar to Sonamarg", image: "pkgSonamarg", duration: "1 day (edit)",
    price: "₹ ____ (edit)", desc: "A scenic drive up the Sindh valley to the glacier meadows.",
    includes: ["Pickup & drop-off", "Vehicle and driver", "Flexible stops", "Edit this list"] },
  { id: "kashmir-sightseeing", name: "Kashmir Sightseeing Tour", image: "pkgSightseeing", duration: "1–2 days (edit)",
    price: "₹ ____ (edit)", desc: "Srinagar's lakes, gardens and old city, at your own pace.",
    includes: ["Pickup & drop-off", "Vehicle and driver", "Custom route", "Edit this list"] },
  { id: "complete-kashmir", name: "Complete Kashmir Tour", image: "pkgComplete", duration: "__ days (edit)",
    price: "₹ ____ (edit)", desc: "Srinagar, Gulmarg, Pahalgam and Sonamarg in one planned trip.",
    includes: ["Pickup & drop-off", "Vehicle and driver for the full trip", "Itinerary built with you", "Edit this list"] }
];

/* ---------- TESTIMONIALS ---------- set sample:false once a review is real ---------- */
const TESTIMONIALS = [
  { name: "Traveller name", place: "City, State", text: "Replace this with a real review from a guest who travelled with you.", sample: true },
  { name: "Traveller name", place: "City, State", text: "Replace this with a real review from a guest who travelled with you.", sample: true },
  { name: "Traveller name", place: "City, State", text: "Replace this with a real review from a guest who travelled with you.", sample: true }
];

/* ---------- GALLERY ---------- */
const GALLERY = [
  { image: "g1", alt: "Kashmir landscape", size: "tall" },
  { image: "g2", alt: "Happy tourists" },
  { image: "g3", alt: "Our car on the road" },
  { image: "g4", alt: "Scenic mountain road", size: "wide" },
  { image: "g5", alt: "Snow-covered Gulmarg", size: "tall" },
  { image: "g6", alt: "Green valley" },
  { image: "g7", alt: "Guests on a trip" },
  { image: "g8", alt: "Lake view" }
];
