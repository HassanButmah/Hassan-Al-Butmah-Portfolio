const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const out = path.join("public", "images", "projects");
fs.mkdirSync(out, { recursive: true });

const cards = [
  {
    file: "book-exchange.jpg",
    title: "Book Exchange",
    sub: "Hebron University",
    color: "#1a3a32",
  },
  {
    file: "hebron-chatbot.jpg",
    title: "Hebron Chatbot",
    sub: "RAG · Arabic AI",
    color: "#1e2a3a",
  },
  {
    file: "avior-watches.jpg",
    title: "Avior Watches",
    sub: "Luxury Commerce",
    color: "#141414",
  },
  {
    file: "it-talent-radar.jpg",
    title: "IT Talent Radar",
    sub: "HU IT Club",
    color: "#1a2f28",
  },
  {
    file: "baladverse.jpg",
    title: "BaladVerse",
    sub: "Palestine Map",
    color: "#1c2430",
  },
];

(async () => {
  for (const c of cards) {
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="2000">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c.color}"/>
      <stop offset="100%" stop-color="#050708"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="2000" fill="url(#g)"/>
  <circle cx="1280" cy="360" r="280" fill="none" stroke="#8fa88a" stroke-width="1.5" opacity="0.25"/>
  <text x="120" y="1680" fill="#F3F5F7" font-family="Georgia, serif" font-size="92">${c.title}</text>
  <text x="120" y="1760" fill="#8fa88a" font-family="system-ui,sans-serif" font-size="34" letter-spacing="6">${c.sub.toUpperCase()}</text>
</svg>`;
    await sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toFile(path.join(out, c.file));
    console.log("wrote", c.file);
  }
})();
