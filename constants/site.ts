export const SITE = {
  name: "Hassan Al-Butmah",
  shortName: "HASSAN",
  role: "Software Developer",
  tagline:
    "خريج Computer Science من جامعة الخليل، وأطور منتجات باستخدام React و Node و PHP و MySQL و Firebase والذكاء الاصطناعي.",
  email: "hassanalbutmah2@gmail.com",
  location: "Hebron, Palestine",
  github: "https://github.com/HassanButmah",
  linkedin: "https://www.linkedin.com/in/hassan-al-butmah",
} as const;

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#craft", label: "Craft" },
  { href: "#work", label: "Work" },
  { href: "#presence", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export const PHOTOS = {
  hero: "/images/hassan/hero.jpg",
  about: "/images/hassan/about.jpg",
  craft: "/images/hassan/craft.jpg",
  work: "/images/hassan/work.jpg",
  process: "/images/hassan/process.jpg",
  contact: "/images/hassan/contact.jpg",
  moments: [
    "/images/hassan/moment-01.jpg",
    "/images/hassan/moment-02.jpg",
    "/images/hassan/moment-03.jpg",
    "/images/hassan/moment-04.jpg",
  ],
} as const;

export const HERO_IMAGE = PHOTOS.hero;

export const CHAPTERS = [
  {
    id: "01",
    eyebrow: "About / Hassan",
    title: "Hassan Al-Butmah.\nSoftware developer\nbuilding presence.",
    body: "خريج Computer Science من جامعة الخليل، وأطور منتجات باستخدام React و Node و PHP و MySQL و Firebase والذكاء الاصطناعي.",
    image: PHOTOS.about,
  },
  {
    id: "02",
    eyebrow: "Craft / Motion",
    title: "Scroll is not\nnavigation.\nIt is narrative.",
    body: "أصمم فصولًا مثبتة وانتقالات ناعمة وطبقات متحركة، ليصبح كل تمرير تجربة مقصودة وهادئة وسينمائية.",
    image: PHOTOS.craft,
  },
  {
    id: "03",
    eyebrow: "Work / Selection",
    title: "Selected work\nfrom GitHub —\nlive and real.",
    body: "مشاريع متنوعة تجمع بين الفكرة والتقنية والتجربة، صممتها بعناية لتقدم حلولًا عملية وتجارب رقمية مؤثرة.",
    image: PHOTOS.work,
  },
  {
    id: "04",
    eyebrow: "Process / Depth",
    title: "Design systems\nmeet frame-\nperfect code.",
    body: "أجمع بين Next.js وTypeScript وPostgreSQL مع إيقاع مدروس، وتفاصيل واضحة، واهتمام دقيق بجودة كل جزء.",
    image: PHOTOS.process,
  },
] as const;

export const PROJECTS = [
  {
    num: "01",
    title: "Book Exchange",
    role: "Full-Stack · Marketplace",
    note: "منصة لتبادل الكتب بين طلبة جامعة الخليل، تشمل التحقق عبر OTP والإعلانات والبحث وواجهة API مدعومة بـ PostgreSQL.",
    image: "/images/projects/book-exchange.jpg",
    live: "https://book-exchange-ecru.vercel.app",
    repo: "https://github.com/HassanButmah/Book-Exchange",
  },
  {
    num: "02",
    title: "Hebron Chatbot",
    role: "AI · RAG · Python",
    note: "مساعد ذكي عربي لجامعة الخليل يعتمد على RAG، مع لوحة تحكم وواجهة قابلة للتضمين وتغذية مباشرة للبيانات.",
    image: "/images/projects/hebron-chatbot.jpg",
    live: null,
    repo: "https://github.com/HassanButmah/hebron-chatbot",
  },
  {
    num: "03",
    title: "Avior Watches",
    role: "Next.js · E-commerce",
    note: "متجر فاخر للساعات يضم حركات GSAP وسلة مشتريات ولوحة إدارة كاملة وتخزينًا دائمًا عبر PostgreSQL.",
    image: "/images/projects/avior-watches.jpg",
    live: "https://avior-watches.vercel.app",
    repo: "https://github.com/HassanButmah/Avior-Watches",
  },
  {
    num: "04",
    title: "IT Talent Radar",
    role: "Next.js · AI Platform",
    note: "منصة لاكتشاف مواهب نادي تكنولوجيا المعلومات، تشمل البحث الدلالي وبناء الفرق والفعاليات ومساعد RAG.",
    image: "/images/projects/it-talent-radar.jpg",
    live: "https://it-talent-radar.vercel.app",
    repo: "https://github.com/HassanButmah/IT-Talent-Radar",
  },
  {
    num: "05",
    title: "BaladVerse",
    role: "Next.js · Map Stories",
    note: "خريطة تفاعلية لسرد قصص فلسطين، تضم المدن والذكريات ونظام النقاط وتسجيل الدخول باستخدام JWT.",
    image: "/images/projects/baladverse.jpg",
    live: null,
    repo: "https://github.com/HassanButmah/Web-programmer",
  },
] as const;

export const STATS = [
  { value: 5, suffix: "", label: "مشاريع على GitHub" },
  { value: 18, suffix: "+", label: "تقنية وأداة" },
  { value: 3, suffix: "", label: "مواقع منشورة على Vercel" },
  { value: 2, suffix: "", label: "مشاريع تعتمد على AI" },
] as const;

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "JavaScript", level: 92 },
      { name: "HTML / CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "GSAP", level: 78 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 84 },
      { name: "PHP", level: 80 },
      { name: "Python", level: 78 },
      { name: "REST APIs", level: 88 },
      { name: "JWT Auth", level: 86 },
      { name: "Cloudinary", level: 72 },
      { name: "Zustand", level: 70 },
    ],
  },
  {
    title: "Data & AI",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "Firebase", level: 80 },
      { name: "Prisma", level: 78 },
      { name: "SQLite", level: 75 },
      { name: "RAG", level: 80 },
      { name: "ChromaDB", level: 72 },
      { name: "Ollama", level: 70 },
    ],
  },
] as const;

export const MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PHP",
  "Python",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "Tailwind CSS",
  "GSAP",
  "Prisma",
  "RAG",
  "ChromaDB",
  "JWT",
] as const;
