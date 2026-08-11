export interface Project {
  id: number;
  indexFormatted: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  url: string;
  githubUrl: string;
  image: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    indexFormatted: "01 / 07",
    title: "Shahrukhz Menu AR — Interactive AR Restaurant Menu",
    subtitle: "WebAR Restaurant SaaS Platform",
    description:
      "A modern Web-based AR Menu platform built for restaurants, allowing customers to explore dishes through immersive 3D experiences directly from their smartphones without installing an app. The platform includes QR-based access, mobile-friendly experiences, restaurant-focused features, analytics, and customer engagement tools.",
    highlights: ["Web AR", "3D Experiences", "QR-Based Ordering", "Restaurant SaaS"],
    url: "https://www.shahrukhz.co/",
    githubUrl: "https://github.com/ebbadullah",
    image: "/images/projects/shahrukhz.png",
    category: "Augmented Reality & SaaS",
  },
  {
    id: 2,
    indexFormatted: "02 / 07",
    title: "EverAfter — AR & AI Wedding Invitation Platform",
    subtitle: "Interactive Digital Experience Platform",
    description:
      "An interactive wedding-card platform that combines Augmented Reality and AI to create personalized digital wedding experiences. Users can customize wedding cards with names, event details, locations, 3D bride and groom models, animated backgrounds, music, videos, and AI-generated invitation themes.",
    highlights: ["Augmented Reality", "AI Generation", "3D Models", "Personalization"],
    url: "https://www.arweddingcard.com/",
    githubUrl: "https://github.com/ebbadullah",
    image: "/images/projects/arweddingcard.png",
    category: "Spatial AI & WebAR",
  },
  {
    id: 3,
    indexFormatted: "03 / 07",
    title: "Royal Foods — Premium Food & Sauce E-Commerce Website",
    subtitle: "Brand-Focused Direct-To-Consumer Experience",
    description:
      "A premium food brand website designed around Royal Foods' sauce products, combining a bold dark visual identity with product-focused presentation and an e-commerce-oriented user experience. The interface highlights product categories, brand identity, shopping interactions, and premium food imagery.",
    highlights: ["E-Commerce UI", "Product Showcase", "Food Branding", "Responsive Design"],
    url: "https://royal-food-ibmo.vercel.app/",
    githubUrl: "https://github.com/ebbadullah",
    image: "/images/projects/royalfoods.png",
    category: "E-Commerce & Digital Branding",
  },
  {
    id: 4,
    indexFormatted: "04 / 07",
    title: "Techzone Learning — Student Feedback Management System",
    subtitle: "Academic Data Collection & Workflow Platform",
    description:
      "A student feedback management platform designed for collecting structured feedback about courses, teachers, batch timings, class schedules, teaching quality, and course content. The system provides a clean digital alternative to traditional feedback collection and helps organize student experiences for better academic improvement.",
    highlights: ["Feedback Management", "Admin Workflow", "Rating System", "Data Collection"],
    url: "https://techzone-learning-feedbackapp.netlify.app/",
    githubUrl: "https://github.com/ebbadullah",
    image: "/images/projects/techzonefeedback.png",
    category: "Full-Stack Enterprise App",
  },
  {
    id: 5,
    indexFormatted: "05 / 07",
    title: "786 Automobiles — Vehicle Marketplace & Inventory Platform",
    subtitle: "Automotive Lead Generation & Inspection Marketplace",
    description:
      "A professional automotive marketplace designed to help customers discover inspected and verified vehicles. The platform provides vehicle search and filtering, featured inventory, brand-based browsing, vehicle requests, and inquiry functionality for customers looking for cars and heavy machinery.",
    highlights: ["Automotive Marketplace", "Advanced Search", "Inventory", "Lead Generation"],
    url: "https://www.786automobiles.com/",
    githubUrl: "https://github.com/ebbadullah",
    image: "/images/projects/786.png",
    category: "Marketplace & Inventory Platform",
  },
  {
    id: 6,
    indexFormatted: "06 / 07",
    title: "The Terminators — Electrical Engineering & Services Website",
    subtitle: "Industrial Corporate Services Portal",
    description:
      "A corporate website created for an electrical engineering and technical services company, presenting its industrial capabilities, engineering services, projects, company information, gallery, and customer-facing service sections through a professional business-oriented interface.",
    highlights: ["Corporate Website", "Service Showcase", "Project Gallery", "Business Branding"],
    url: "https://theterminators.biz.pk/",
    githubUrl: "https://github.com/ebbadullah",
    image: "/images/projects/terminator.png",
    category: "Corporate Industrial Website",
  },
  {
    id: 7,
    indexFormatted: "07 / 07",
    title: "Webbotly — AI Chatbot for Business Websites",
    subtitle: "24/7 Conversational AI Lead Generation Platform",
    description:
      "An AI-powered chatbot platform designed to transform business websites into interactive 24/7 assistants. Webbotly helps businesses engage visitors, answer questions, guide users toward relevant actions, and improve lead generation and customer support.",
    highlights: ["AI SaaS", "Conversational AI", "Lead Generation", "Customer Support"],
    url: "https://www.webbotly.com/",
    githubUrl: "https://github.com/ebbadullah",
    image: "/images/projects/webbotly.png",
    category: "AI SaaS & Conversational Products",
  },
];
