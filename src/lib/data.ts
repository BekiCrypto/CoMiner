export const siteData = {
  brand: {
    name: "CoMiner Business Group",
    tagline: "Excellence in Mining"
  },
  navigation: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    title: "Pioneering the Future of Sustainable Mining",
    subtitle: "CoMiner Business Group is at the forefront of the mining industry, driving innovation, sustainability, and global partnerships.",
    cta: { text: "Discover Our Projects", href: "#projects" },
  },
  about: {
    title: "Forging a Legacy of Responsibility and Innovation",
    paragraphs: [
      "Founded on the principles of integrity and excellence, CoMiner Business Group has grown from a specialized geological consultancy into a global leader in the mining sector. Our journey is one of continuous evolution, marked by a commitment to adopting cutting-edge technologies and sustainable practices.",
      "Our mission is to unlock the earth's potential in a manner that respects the environment and empowers communities. We believe that responsible mining is the cornerstone of modern progress, providing the essential materials for a connected and sustainable world."
    ],
    stats: [
      { value: "20+", label: "Years of Experience" },
      { value: "15", label: "Countries of Operation" },
      { value: "50+", label: "Successful Projects" },
      { value: "98%", label: "Client Satisfaction" },
    ]
  },
  services: {
    title: "Comprehensive Mining Solutions",
    description: "From initial exploration to final delivery, we offer a complete suite of services tailored to the complexities of the modern mining industry.",
    items: [
      {
        name: "Geological Surveying",
        description: "Utilizing advanced imaging and analysis to identify and assess valuable mineral deposits.",
        icon: "Mountain"
      },
      {
        name: "Resource Extraction",
        description: "Employing state-of-the-art, safe, and efficient techniques for mineral extraction.",
        icon: "Hammer"
      },
      {
        name: "Processing & Refining",
        description: "Transforming raw materials into high-purity, market-ready products through advanced metallurgical processes.",
        icon: "FlaskConical"
      },
      {
        name: "Logistics & Transport",
        description: "Ensuring the secure and timely transport of resources from mine to market globally.",
        icon: "Truck"
      }
    ]
  },
  products: {
    title: "Our Core Commodities",
    description: "We specialize in the extraction and processing of key minerals that are vital to global industries, from technology to construction.",
    items: [
      {
        name: "Gold",
        description: "A precious metal valued for its use in jewelry, electronics, and financial assets."
      },
      {
        name: "Copper",
        description: "Essential for electrical wiring, plumbing, and renewable energy infrastructure."
      },
      {
        name: "Lithium",
        description: "A critical component in batteries for electric vehicles and energy storage systems."
      },
      {
        name: "Diamonds",
        description: "Sought after for both their beauty in jewelry and their hardness in industrial applications."
      }
    ]
  },
  partnerships: {
    title: "Strength in Collaboration",
    description: "Our success is built on strong, strategic partnerships with industry leaders in technology, logistics, and machinery.",
    partners: [
      { name: "GeoCore Analytics" },
      { name: "TerraLogistics" },
      { name: "Summit Heavy Machinery" },
    ]
  },
  team: {
    title: "The Minds Behind the Minerals",
    description: "Our team of seasoned experts combines deep industry knowledge with a passion for innovation and a commitment to excellence.",
    members: [
      {
        name: "Jane Doe",
        role: "Chief Executive Officer",
        bio: "With over two decades in the mining industry, Jane provides strategic leadership and vision for the group."
      },
      {
        name: "John Smith",
        role: "Chief Geologist",
        bio: "John's expertise in resource identification and assessment is unparalleled, driving our exploration success."
      },
      {
        name: "Emily White",
        role: "Head of Sustainability",
        bio: "Emily spearheads our ESG initiatives, ensuring all operations meet the highest environmental and social standards."
      }
    ]
  },
  sustainability: {
    title: "Committed to a Greener Future",
    description: "Sustainability is not just a policy; it's at the core of our identity. We are dedicated to minimizing our environmental impact and creating lasting positive change.",
    items: [
      {
        name: "Environmental Restoration",
        description: "We implement comprehensive restoration projects to return mined lands to their natural state, promoting biodiversity and ecological balance.",
        icon: "Leaf"
      },
      {
        name: "Community Engagement",
        description: "We partner with local communities to foster economic development, improve infrastructure, and support education and healthcare initiatives.",
        icon: "Users"
      }
    ]
  },
  projects: {
    title: "Our Global Footprint",
    description: "A selection of our key projects, showcasing our diverse capabilities and international reach.",
    items: [
      {
        title: "Kalahari Diamond Mine",
        location: "Botswana",
        description: "A flagship project known for its high-yield, ethically sourced diamonds and state-of-the-art extraction technology.",
        status: "Operational"
      },
      {
        title: "Andean Lithium Project",
        location: "Chile",
        description: "A pioneering lithium brine extraction project, crucial for meeting the growing demand for renewable energy solutions.",
        status: "Development"
      },
      {
        title: "Congo Copper Belt",
        location: "DRC",
        description: "A large-scale copper mining and refining operation, contributing significantly to the local economy and global supply chain.",
        status: "Operational"
      }
    ]
  },
  contact: {
    title: "Get in Touch",
    description: "Have a question or a project proposal? Our team is ready to assist you. Please fill out the form below or contact us directly.",
    address: "123 Mining Road, Gold Creek, CO 80401",
    phone: "+1 (555) 123-4567",
    email: "contact@cominergroup.com",
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
  'About Paragraph 1': siteData.about.paragraphs[0],
  'About Paragraph 2': siteData.about.paragraphs[1],
  'Services Title': siteData.services.title,
  'Services Description': siteData.services.description,
  'Products Title': siteData.products.title,
  'Products Description': siteData.products.description,
  'Team Title': siteData.team.title,
  'Team Description': siteData.team.description,
  'Sustainability Title': siteData.sustainability.title,
  'Sustainability Description': siteData.sustainability.description,
  'Projects Title': siteData.projects.title,
  'Projects Description': siteData.projects.description,
  'Contact Title': siteData.contact.title,
  'Contact Description': siteData.contact.description,
};
