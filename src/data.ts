import { StampService, Review, FAQ, GalleryItem, BlogPost } from "./types";

export const BUSINESS_INFO = {
  name: "Mohar & Stamp Printing Service By Neptastic",
  titleAndSEO:
    "Customized Rubber Stamp Printing Services in Greater Noida West | Mohar & Stamp Printing Service By Neptastic",
  metaDesc:
    "Mohar & Stamp Printing Service By Neptastic provides customized rubber stamps, office mohars, company seals, self-inking stamps, GST stamps, signature stamps, and business branding stamps in Greater Noida West. Fast service, quality printing, and professional stamp-making solutions for offices, businesses, and personal use.",
  h1: "Customized Rubber Stamp Printing in Greater Noida West",
  h2: "Office Mohar & Company Seal Printing Services",
  address:
    "RS Plaza, Block B-07, Near Ace Divino, Sector 1, Greater Noida West, Bisrakh Jalalpur, Uttar Pradesh – 201318",
  phone: "9267900106",
  website: "stamp.neptastic.in",
  whatsappUrl:
    "https://wa.me/919267900106?text=Hello,%20I%20am%20interested%20in%20ordering%20a%20customized%20rubber%20stamp%20/%20mohar.%20Please%20share%20details.",
  callNumber: "tel:+919267900106",
  heroTitle: "Customized Rubber Stamp & Office Mohar Printing",
  heroSubtitle:
    "Professional Stamp Printing Solutions for Offices, Businesses & Personal Use",
  tagline: "Professional Stamp Printing Solutions",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "self-inking-stamp-vs-rubber-stamp",
    title: "Self-Inking Stamp vs Rubber Stamp: Which One Is Better for Daily Office Use?",
    excerpt:
      "Understand the difference between self-inking stamps and traditional rubber stamps, and choose the right option for daily office work in Greater Noida West.",
    publishedAt: "2026-05-26",
    author: "Neptastic Editorial Desk",
    category: "Self-Inking Stamps",
    keywords: [
      "self-inking stamp",
      "rubber stamp",
      "office stamp",
      "stamp shop greater noida west",
    ],
    content: [
      "Self-inking stamps are the most practical choice for offices that stamp documents every day. They come with an inbuilt ink system, work quickly, and keep impressions consistent across repeated use.",
      "Traditional rubber stamps still work well for occasional use, but they need a separate ink pad and usually take more effort to keep clean and readable. For busy administrative desks, self-inking models are generally faster and more reliable.",
      "If you need a stamp for invoices, routine approvals, dispatch work, or repeated signatures, self-inking stamps are usually the better long-term option. If you need a simple one-off text stamp, a regular rubber stamp can still be enough.",
      "At our Greater Noida West workshop, most daily-use business orders are self-inking because clients want clean impressions, lower mess, and faster document handling.",
    ],
  },
  {
    slug: "documents-needed-for-company-seal",
    title: "What Details and Documents Are Needed for a Company Seal?",
    excerpt:
      "A practical guide to the business name, designation, and supporting details commonly used when ordering a company seal or office mohar.",
    publishedAt: "2026-05-26",
    author: "Neptastic Editorial Desk",
    category: "Company Seals",
    keywords: [
      "company seal",
      "office mohar",
      "pvt ltd seal",
      "company stamp greater noida west",
    ],
    content: [
      "A company seal usually needs the registered business name and the correct signatory designation. For many business clients, accuracy matters more than design, because the final stamp has to look professional on official paperwork.",
      "Before placing the order, it helps to confirm the exact spelling of the registered name, whether the seal is round or rectangular, and what internal designation should appear in the center or second line.",
      "For private limited companies, many clients also share incorporation-related details or a reference document so the final text matches their legal records exactly. That helps reduce rework and keeps the impression consistent with business use.",
      "If you are unsure about layout, a draft proof is the safest step. It lets you check text placement, line spacing, and signatory wording before the seal is prepared.",
    ],
  },
  {
    slug: "how-to-format-gst-stamp",
    title: "How to Format a GST Stamp Correctly for Daily Billing Use",
    excerpt:
      "Learn the standard text structure often used for GST stamps, including business name, GSTIN, address, and signatory details.",
    publishedAt: "2026-05-26",
    author: "Neptastic Editorial Desk",
    category: "GST Stamps",
    keywords: [
      "gst stamp",
      "gstin stamp format",
      "self-inking gst stamp",
      "gst stamp greater noida west",
    ],
    content: [
      "A GST stamp is usually kept simple so that it remains readable on invoices, challans, and billing documents. The most common layout includes the business name, GSTIN, office address, and sometimes a signatory line.",
      "The most important part is accuracy. A GSTIN should be checked carefully before final proofing because even a small mistake can make the stamp useless for regular office work.",
      "For businesses that stamp invoices throughout the day, self-inking formats are often preferred because they save time and keep impressions cleaner than separate-pad stamps.",
      "When choosing the size, it is best to keep the stamp readable rather than overloading it with too many lines. A compact, well-spaced layout usually performs better in real office use.",
    ],
  },
];

export const STAMP_SERVICES: StampService[] = [
  {
    id: "proprietorship",
    name: "Proprietorship Mohar",
    tagline: "Standard Authorisation Stamp",
    description:
      "Crucial for current accounts, bill signing, and legal compliance. Features standard 'For [Firm Name]' at top and 'Proprietor' at the bottom.",
    inkColors: ["Blue", "Red", "Black", "Violet"],
    approxPrice: "₹180 onwards",
    shape: "rectangle",
    iconName: "FileSignature",
  },
  {
    id: "company_seal",
    name: "Private Limited Company Seal",
    tagline: "Heavy-Duty Brass & Acrylic Seals",
    description:
      "Official corporate round stamps for private limited companies, featuring registrations, incorporation dates, and director signature borders.",
    inkColors: ["Blue", "Purple", "Metal Impression"],
    approxPrice: "₹450 onwards",
    shape: "round",
    iconName: "Award",
  },
  {
    id: "gst_stamp",
    name: "GST Stamp",
    tagline: "Tax and Invoice Branding Stamps",
    description:
      "Multi-line self-inking stamps displaying Business Registered Name, GSTIN number, and complete Billing Address for rapid paperwork billing.",
    inkColors: ["Blue", "Black", "Red"],
    approxPrice: "₹250 onwards",
    shape: "rectangle",
    iconName: "Calculator",
  },
  {
    id: "signature_stamp",
    name: "Signature Stamp",
    tagline: "High Definition Replica Impression",
    description:
      "Replicates your exact handwritten signature down to the micro-stroke. Essential for executives signing high volumes of delivery memos and vouchers.",
    inkColors: ["Blue", "Black", "Violet"],
    approxPrice: "₹220 onwards",
    shape: "signature",
    iconName: "PenTool",
  },
  {
    id: "status_stamp",
    name: "Verify / Approved / Paid Stamp",
    tagline: "Office Administrative Stamps",
    description:
      "Standard action-status stamps, with boxed outlines, date adjustment gaps, and initials slots to streamline your accountant workflows.",
    inkColors: ["Red", "Green", "Blue"],
    approxPrice: "₹120 onwards",
    shape: "rectangle",
    iconName: "CheckSquare",
  },
  {
    id: "office_seal",
    name: "Office Seal Stamp",
    tagline: "Round Administrative Seals",
    description:
      "General office and institutional seal stamps. Recommended for schools, institutions, government setups, and complex legal firms.",
    inkColors: ["Blue", "Violet", "Black"],
    approxPrice: "₹190 onwards",
    shape: "round",
    iconName: "ShieldAlert",
  },
  {
    id: "name_stamp",
    name: "Name Stamp",
    tagline: "Personal Pocket Stamps",
    description:
      "Compact sliding card stamps displaying Name, Designation, and Mobile Number. Extremely handy for mobile sales agents, doctors, and lawyers.",
    inkColors: ["Blue", "Black"],
    approxPrice: "₹150 onwards",
    shape: "rectangle",
    iconName: "UserCheck",
  },
  {
    id: "packaging_stamp",
    name: "Packaging Branding Stamp",
    tagline: "Oversized Custom Wooden Stamps",
    description:
      "Large format wood-mounted stamps for cost-effective packaging branding on paper carrier bags, cardboard boxes, and raw craft papers.",
    inkColors: ["Black", "Brown", "Deep Blue"],
    approxPrice: "₹350 onwards",
    shape: "rectangle",
    iconName: "Package",
  },
  {
    id: "logo_stamp",
    name: "Custom Logo Stamp",
    tagline: "High-Fidelity Graphic Impression",
    description:
      "Vector graphic engraving rendering crystal clear brand logos on paper, invoices, and certificates. Built on high-performance laser cut rubber.",
    inkColors: ["Blue", "Red", "Black", "Green"],
    approxPrice: "₹290 onwards",
    shape: "round",
    iconName: "Sparkles",
  },
  {
    id: "self_ink",
    name: "Self Ink Stamp",
    tagline: "Pre-loaded Premium Hand-stamps",
    description:
      "Automatic ink-reloading mechanism using Japanese flash technology. Clear, crisp laser marks with no external pad needed for 10,000+ impressions.",
    inkColors: ["Blue", "Red", "Black", "Violet"],
    approxPrice: "₹250 onwards",
    shape: "rectangle",
    iconName: "Zap",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    name: "Pocket Flashy Stamp 6905",
    category: "Pocket Stamps",
    image: "/gallery/1.png",
    price: "₹280",
    features: [
      "Compact pocket size",
      "Flash impression technology",
      "Easy carry design",
    ],
  },
  {
    id: "g2",
    name: "Premium Color Self-Inking Stamp Set",
    category: "Self-Inking Stamps",
    image: "/gallery/2.png",
    price: "₹450",
    features: [
      "Available in 3 colors",
      "Smooth stamping action",
      "Clear impression quality",
    ],
  },
  {
    id: "g3",
    name: "Pre Ink Bill Paid Stamp",
    category: "Office Mohars",
    image: "/gallery/3.png",
    price: "₹240",
    features: [
      "Sharp BILL PAID impression",
      "Multiple ink colors",
      "Daily office use",
    ],
  },
  {
    id: "g4",
    name: "Heavy Duty Bill Paid Office Stamp",
    category: "Administrative Stamps",
    image: "/gallery/4.png",
    price: "₹320",
    features: [
      "Bold office marking",
      "Strong handle grip",
      "Long-lasting body",
    ],
  },
  {
    id: "g5",
    name: "Premium Dater Self-Inking Stamp",
    category: "Dater Stamps",
    image: "/gallery/5.png",
    price: "₹380",
    features: [
      "Adjustable date wheels",
      "Red-black premium body",
      "Clean date impression",
    ],
  },
  {
    id: "g6",
    name: "Classic Rubber Mohar Stamp",
    category: "Office Mohars",
    image: "/gallery/6.png",
    price: "₹180",
    features: [
      "Traditional office mohar",
      "Strong rubber base",
      "Clear stamp output",
    ],
  },
  {
    id: "g7",
    name: "Round Flash Seal Stamp",
    category: "Company Seals",
    image: "/gallery/7.png",
    price: "₹350",
    features: [
      "Round seal design",
      "Premium black finish",
      "Compact office seal",
    ],
  },
  {
    id: "g8",
    name: "Black Self-Inking Office Stamp",
    category: "Self-Inking Stamps",
    image: "/gallery/8.png",
    price: "₹260",
    features: [
      "Modern black body",
      "Quick press mechanism",
      "Professional office use",
    ],
  },
  {
    id: "g9",
    name: "Signature Pocket Stamp",
    category: "Signature Stamps",
    image: "/gallery/9.png",
    price: "₹340",
    features: [
      "Pocket friendly design",
      "Smooth signature print",
      "Fast stamping action",
    ],
  },
  {
    id: "g10",
    name: "Premium Dater Office Stamp",
    category: "Office Stamps",
    image: "/gallery/10.png",
    price: "₹420",
    features: [
      "Professional date marking",
      "Transparent bottom base",
      "Heavy-duty mechanism",
    ],
  },
  {
    id: "g11",
    name: "Packaging Logo Stamp",
    category: "Packaging & Logos",
    image: "/gallery/11.png",
    price: "₹300",
    features: [
      "Custom logo engraving",
      "High-quality rubber",
      "Compact packaging stamp",
      "Sharp logo impressions",
    ],
  },
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Saurabh Choudhary",
    role: "Pvt Ltd Company Owner, Noida Sector 62",
    rating: 5,
    comment:
      "Excellent fast service! Called them at 11 AM next to Ace Divino for our company round seal and multi-line GST stamp. Got the free visual proof on WhatsApp within 10 minutes and stamps delivered via Dunzo by 3 PM. Highly professional stamp maker in Greater Noida West.",
    date: "May 12, 2026",
    verified: true,
  },
  {
    id: "r2",
    name: "Dr. Pallavi Sharma",
    role: "Senior Consultant Paediatrician",
    rating: 5,
    comment:
      "I order customized name stamps with medical registration numbers frequently for our clinic staff. The self-inking pocket stamp from Neptastic is of exceptional quality, handles 100+ clicks daily with crisp blue ink impressions. Very convenient click to call button.",
    date: "April 29, 2026",
    verified: true,
  },
  {
    id: "r3",
    name: "Aman Agarwal",
    role: "Proprietor, Krishna Groceries Bisrakh",
    rating: 5,
    comment:
      "Excellent price representation and zero spell mistakes! I got my Proprietorship mohar and custom packaging logos. They suggested standard 'Authorized Signatory' alignment format. High-quality rubber used.",
    date: "May 18, 2026",
    verified: true,
  },
  {
    id: "r4",
    name: "Divya Teotia",
    role: "CA, Divya & Co Associates",
    rating: 4,
    comment:
      "Very quick turnaround for GSTIN stamps and check-approved dated stamps. The AI proofing tool they have on the site is standard-compliant and extremely helpful to test configurations! Best stamp pricing in Sector 1.",
    date: "May 22, 2026",
    verified: true,
  },
];

export const FAQS: FAQ[] = [
  {
    id: "f1",
    question:
      "What details are required to print a Proprietorship or Pvt Ltd Company Stamp?",
    answer:
      "For Proprietorship, we need your Brand/Firm Name. For Private Limited Company Seals, you need to share your active Certificate of Incorporation (COI) or authorization letter if it is an official round seal, ensuring authorized legal use. For personal/administrative stamps, just basic text is needed.",
    category: "Legality",
  },
  {
    id: "f2",
    question:
      "How fast can you deliver stamps in Greater Noida West and Gaur City?",
    answer:
      "We offer express 3-to-4 Hours delivery in Greater Noida West, Sector 1, Gaur City, Sector 62, and Bisrakh! You can either pick it up from our physical store in RS Plaza near Ace Divino or we can dispatch it via courier immediately upon layout confirmation.",
    category: "Delivery",
  },
  {
    id: "f3",
    question:
      "What is the difference between Self-Inking, Pre-Inked, and Traditional Rubber Stamps?",
    answer:
      "Traditional rubber stamps require an external ink pad. Self-inking stamps (like Shiny/Colop) contain an integrated, replaceable ink pad that clicks on every press. Pre-Inked / Sun Stamps utilize advanced micro-porous flash technology where ink is pre-loaded directly inside the premium rubber, providing up to 15,000 clear, leakproof impressions.",
    category: "Stamps",
  },
  {
    id: "f4",
    question:
      "How do I share my vector logo or handwritten signature for customized stamps?",
    answer:
      "You can click our direct WhatsApp button to chat with our executive! For signatures, simply write on a blank white paper in dark ink, click a high-res photo, and send it. For logos, we accept high-res PNG, PDF, or vector SVG formats.",
    category: "Ordering",
  },
  {
    id: "f5",
    question:
      "Which ink color is best suited for official company and GST seals?",
    answer:
      "Corporate and Indian GST standards usually prefer deep Royal Blue or Violet ink for legal authority signatures. For accounting actions ('PAID', 'CANCELLED', 'URGENT'), vibrant Scarlet Red is the standard color of choice.",
    category: "Legality",
  },
];

export const OFFICE_MOHAR_COLLECTION = [
  {
    title: "Heavy Duty Metal Daters",
    usage: "Inward/Outward Mails, Bank Cash Desks, Warehouse Receipt Registers",
    durability: "Steel reinforced frames sustaining 1,00,000+ daily cycles",
    cost: "₹650 - ₹1200",
  },
  {
    title: "Shiny Handy Pocket Stamps",
    usage: "Doctors, On-field surveyors, CA Verifications on client sites",
    durability:
      "Compact foldaways fitting easily inside uniform breast pockets",
    cost: "₹180 - ₹350",
  },
  {
    title: "Round Brass Embellishment Seals",
    usage: "Premium Certificates, Degree Awards, Legal Notary Deeds",
    durability:
      "Solid deeply carved heavy metal brass molds leaving crisp relief markings",
    cost: "₹750 - ₹1400",
  },
];

export const WHY_CHOOSE_US_POINTERS = [
  {
    title: "Express 3-Hour Store Pickup",
    desc: "Placed near Ace Divino Sector 1, you can pick up custom stamps in under 3 hours of online design proofing.",
    icon: "Clock",
  },
  {
    title: "Compliance-Assured Proofs",
    desc: "Our automated systems and expert staff double-check standard GST format guidelines with zero spelling errors.",
    icon: "Shield",
  },
  {
    title: "Japanese Flash Micro-Ink Tech",
    desc: "We utilize high-density polymer matrices preventing leakage or fuzzy ink blurring for sharp legal marks.",
    icon: "Activity",
  },
  {
    title: "Transparent & Competitive Pricing",
    desc: "Premium grade self-inking handles starting at just ₹150 with complete, honest pricing directly published.",
    icon: "Percent",
  },
];
