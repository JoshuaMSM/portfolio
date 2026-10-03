export type Certification = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  image: string;
  period?: string;
};

export const certifications: Certification[] = [
  {
    id: "ibm-ai-architect",
    title: "Generative & Agentic AI Architect",
    issuer: "IBM",
    category: "AI • Architecture",
    image: "/images/ai-architect.jpg",
  },
  {
    id: "ibm-ai-developer",
    title: "Generative & Agentic AI Developer",
    issuer: "IBM",
    category: "AI • Development",
    image: "/images/ai-architect.jpg",
  },
  {
    id: "watsonx-modernization",
    title: "Application Modernization with watsonx",
    issuer: "IBM",
    category: "Modernization",
    image: "/images/ai-architect.jpg",
  },
  {
    id: "digital-product-engineering",
    title: "Digital Product Engineering Essentials",
    issuer: "IBM",
    category: "Product Engineering",
    image: "/images/ai-architect.jpg",
  },
];