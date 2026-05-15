import { 
  Code2, 
  Layout, 
  Smartphone, 
  Palette, 
  LineChart, 
  ShoppingBag,
  Zap,
  Globe,
  Layers,
  Search,
  PenTool,
  Monitor
} from "lucide-react";

export const SERVICES = [
  {
    id: "01",
    title: "Web Design",
    description: "Creating visually stunning, user-centric designs that capture your brand's essence and engage your audience.",
    icon: Palette,
    features: ["UI/UX Design", "Brand Identity", "Prototyping", "Mobile-First Design"]
  },
  {
    id: "02",
    title: "Web Development",
    description: "Building fast, secure, and scalable websites using the latest technologies and best practices.",
    icon: Code2,
    features: ["Next.js/React", "Custom CMS", "API Integration", "Performance Optimization"]
  },
  {
    id: "03",
    title: "E-Commerce",
    description: "Developing powerful online stores that drive sales and provide seamless shopping experiences.",
    icon: ShoppingBag,
    features: ["Shopify Development", "Custom Checkout", "Payment Integration", "Inventory Management"]
  },
  {
    id: "04",
    title: "UI/UX Design",
    description: "Crafting intuitive digital experiences focused on user behavior and business objectives.",
    icon: Layout,
    features: ["User Research", "Wireframing", "Usability Testing", "Interaction Design"]
  },
  {
    id: "05",
    title: "SEO & Performance",
    description: "Optimizing your digital presence for search engines and lightning-fast loading speeds.",
    icon: LineChart,
    features: ["Technical SEO", "Core Web Vitals", "Content Strategy", "Analytics Setup"]
  },
  {
    id: "06",
    title: "Web Applications",
    description: "Transforming complex business logic into powerful, easy-to-use web-based software solutions.",
    icon: Zap,
    features: ["SaaS Development", "Real-time Apps", "Dashboard Design", "Cloud Architecture"]
  }
];

export const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and market landscape to build a solid foundation."
  },
  {
    id: "02",
    title: "Design",
    description: "Our designers craft a unique visual identity and user experience that aligns with your brand strategy."
  },
  {
    id: "03",
    title: "Development",
    description: "We bring the designs to life using cutting-edge technologies, ensuring performance and scalability."
  },
  {
    id: "04",
    title: "Launch",
    description: "After rigorous testing, we deploy your project and provide ongoing support for continued growth."
  }
];

export const STATS = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 50, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" }
];

export const PORTFOLIO = [
  {
    title: "Aura Skincare",
    category: "E-Commerce",
    image: "linear-gradient(135deg, #7c3aed 0%, #00f5ff 100%)",
  },
  {
    title: "Nexus Fintech",
    category: "Web Application",
    image: "linear-gradient(135deg, #00f5ff 0%, #7c3aed 100%)",
  },
  {
    title: "Verve Creative",
    category: "Brand Identity",
    image: "linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)",
  }
];

export const TECHNOLOGIES = [
  "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", 
  "MongoDB", "PostgreSQL", "Figma", "Vercel", "AWS",
  "Framer Motion", "GraphQL", "Prisma", "Docker"
];

export const TESTIMONIALS = [
  {
    quote: "Haptic Web Designs transformed our digital presence. Their attention to detail and technical expertise is unmatched.",
    name: "Sarah Johnson",
    company: "CEO, Aura Skincare"
  },
  {
    quote: "The team delivered a complex web application ahead of schedule. The UI/UX is intuitive and our users love it.",
    name: "Michael Chen",
    company: "CTO, Nexus Fintech"
  },
  {
    quote: "Professional, creative, and highly skilled. They didn't just build a website; they built a growth engine for our business.",
    name: "Emma Williams",
    company: "Founder, Verve Creative"
  }
];

export const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A standard website usually takes 4-8 weeks, while complex web applications can take 3-6 months."
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes, we offer various support and maintenance packages to ensure your website remains secure, updated, and performing optimally."
  },
  {
    question: "What is your typical process?",
    answer: "Our process follows four main stages: Discovery, Design, Development, and Launch. We maintain transparent communication throughout each phase."
  },
  {
    question: "Can you help with rebranding?",
    answer: "Absolutely. We offer full branding services including logo design, color palette development, and brand guidelines."
  }
];
