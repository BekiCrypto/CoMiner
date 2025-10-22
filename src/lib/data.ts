
export const siteData = {
  brand: {
    name: "CoMiner Business Group",
    tagline: "Redefining Mining Excellence in Africa"
  },
  navigation: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Partnerships", href: "#partnerships"},
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    title: "Africa’s Gateway to Global Mineral Markets",
    subtitle: "We deliver end-to-end professional services across the mining value chain — from exploration and feasibility to digital transformation, trading, and export facilitation.",
    cta: { text: "Explore Our Services", href: "#services" },
  },
  about: {
    title: "About CoMiner Business Group",
    overview: "CoMiner Business Group is a multidisciplinary and visionary mining and minerals enterprise legally registered in Ethiopia. We serve as a bridge between Africa’s resource base and global markets, promoting transparent trade, ethical sourcing, and sustainable value addition.",
    vision: "To be the preferred solution provider for mining and mining-related activities in Africa — recognized for integrity, innovation, and sustainable development.",
    mission: "To provide innovative, professional, and multidisciplinary services that support all aspects of mine development — exceeding our clients’ expectations through dedicated human capital and transformative partnerships.",
    values: [
      {
        name: "Integrity",
        description: "We operate transparently and ethically across all engagements."
      },
      {
        name: "Professionalism",
        description: "We deliver world-class technical and business solutions."
      },
      {
        name: "Collaboration",
        description: "We build long-term partnerships based on mutual growth."
      },
      {
        name: "Innovation",
        description: "We apply advanced technologies and creative approaches."
      },
      {
        name: "Sustainability",
        description: "We balance profitability with social and environmental responsibility."
      }
    ]
  },
  services: {
    title: "Our Core Business Divisions",
    description: "Comprehensive support throughout the mining lifecycle — from exploration to closure.",
    items: [
      {
        name: "Mining Consultancy & Engineering",
        description: "Feasibility studies, geological mapping, resource estimation, mine design, and environmental impact assessments.",
        icon: "Mountain"
      },
      {
        name: "Investment & Lender Support",
        description: "Technical due diligence, valuations, independent engineer reports, and project risk analysis for investors and financial institutions.",
        icon: "Landmark"
      },
      {
        name: "Gemstone & Mineral Trade",
        description: "Ethical sourcing, grading, and export of Ethiopian gemstones and minerals with full traceability and certification.",
        icon: "Gem"
      },
      {
        name: "Digital Transformation",
        description: "GIS-based mapping, AI-assisted resource estimation, and blockchain-based gemstone traceability.",
        icon: "Bot"
      }
    ]
  },
  products: {
    title: "Gemstone & Mineral Portfolio",
    description: "Ethical sourcing, grading, and export of Ethiopian gemstones and minerals.",
    items: [
      {
        name: "Precious Gems",
        description: "Including Emerald, Sapphire, Ruby, and Opal."
      },
      {
        name: "Semi-Precious Gems",
        description: "A wide variety including Garnet, Tourmaline, and Aquamarine."
      },
      {
        name: "Metallic Minerals",
        description: "Trading in Copper, Lithium, Tantalite Ore, and Nickel."
      },
      {
        name: "Industrial Minerals",
        description: "Sourcing Quartz, Feldspar, Mica, and other industrial-grade materials."
      }
    ]
  },
  partnerships: {
    title: "Strategic Partnership & Collaboration",
    description: "CoMiner builds alliances with international companies, investors, and governments to strengthen Africa’s mineral economy. Our partnership framework includes ethical global trade, joint venture investments, technology transfer, and co-branded marketing.",
    partners: [
      { name: "De Beers Group" },
      { name: "ALROSA" },
      { name: "Gemfields Group Limited" },
      { name: "Rio Tinto Group" },
      { name: "Tiffany & Co." },
      { name: "Cartier" },
      { name: "Bulgari" },
      { name: "Swarovski" },
      { name: "Chopard" },
      { name: "Van Cleef & Arpels" }
    ]
  },
  team: {
    title: "Leadership & Team",
    description: "The collaborative leadership and integrated expertise of CoMiner’s team position us as a vertically integrated, forward-looking mining and mineral enterprise.",
    members: [
      {
        name: "Bikila Daba",
        role: "General Manager & Co-Founder",
        bio: "A seasoned tech entrepreneur and strategic consultant with over 20 years of experience. Founder of Bikila Techno Center and the driving force behind CoMiner’s strategic direction and innovation."
      },
      {
        name: "Tesfaye Megersa",
        role: "Engineering Lead & Co-Founder",
        bio: "Senior geologist and mining engineer with global experience. Expert in mine planning, grade control, and field operations, ensuring CoMiner’s operational excellence."
      },
      {
        name: "Hanna Mulugeta",
        role: "Principal Attorney, Legal & Regulatory Advisor",
        bio: "Former Senior Legal Advisor to the Minister of Mines and Petroleum with 16+ years of experience in mining law and investment structuring."
      },
      {
        name: "Zewdu Tadesse",
        role: "Senior Advisor, Geology & Hydrogeology",
        bio: "20+ years in mineral exploration and environmental management. Former Director at Oromia Mineral Development Authority."
      },
      {
        name: "Zeryihun Hailu",
        role: "Senior Mineral Engineer",
        bio: "18+ years in mineral exploration, resource estimation, and processing. Advocate for global mining standards and sustainability."
      }
    ]
  },
  sustainability: {
    title: "Commitment to Responsible Growth",
    description: "We are committed to responsible growth, ensuring Africa’s mineral wealth drives industrial development, social progress, and environmental stewardship.",
    items: [
      {
        name: "Capacity Building & Training",
        description: "Skill development for miners and gem cutters, and professional training in mining engineering, geology, and digital modeling.",
        icon: "Users"
      },
      {
        name: "Ethical Sourcing",
        description: "Full traceability and certification from origin to export, ensuring compliance with Ethiopian mining laws and transparent, benchmark-based pricing.",
        icon: "Leaf"
      }
    ]
  },
  // Projects section is removed as there is no specific data in the blueprint.
  projects: {
    title: "Our Global Footprint",
    description: "A selection of our key projects, showcasing our diverse capabilities and international reach.",
    items: []
  },
  contact: {
    title: "Get in Touch",
    description: "Have a question or a project proposal? Our team is ready to assist you. Please fill out the form below or contact us directly.",
    address: "Addis Ababa, Ethiopia",
    phone: "+251 911 300 466 | WhatsApp: +971 5276 63165",
    email: "CoMinerBGPLC@gmail.com",
  },
  footer: {
    socials: [
      { name: "LinkedIn", href: "#" },
      { name: "Twitter", href: "#" },
    ],
    copyright: `© ${new Date().getFullYear()} CoMiner Business Group. All rights reserved.`,
  }
};

export type SiteData = typeof siteData;

export const editableTextsMap = {
  'Hero Title': siteData.hero.title,
  'Hero Subtitle': siteData.hero.subtitle,
  'About Title': siteData.about.title,
  'About Overview': siteData.about.overview,
  'About Vision': siteData.about.vision,
  'About Mission': siteData.about.mission,
  'Services Title': siteData.services.title,
  'Services Description': siteData.services.description,
  'Products Title': siteData.products.title,
  'Products Description': siteData.products.description,
  'Partnerships Title': siteData.partnerships.title,
  'Partnerships Description': siteData.partnerships.description,
  'Team Title': siteData.team.title,
  'Team Description': siteData.team.description,
  'Sustainability Title': siteData.sustainability.title,
  'Sustainability Description': siteData.sustainability.description,
  'Contact Title': siteData.contact.title,
  'Contact Description': siteData.contact.description,
};
