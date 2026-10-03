export type Experience = {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  image: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "ibm",
    title: "Senior Application Developer / Technical Lead",
    subtitle: "AMEX • Enterprise Modernization",
    company: "IBM Consulting",
    period: "Oct 2025 — Present",
    image: "/images/ibm-1.png",
    technologies: [
      "Java",
      "Python",
      "GCP",
      "Airflow",
      "GitHub Actions",
      "Jenkins",
    ],
  },

  {
    id: "gavs",
    title: "Technical Lead",
    subtitle: "Healthcare • Claims & Remittance",
    company: "GAVS Technologies",
    period: "Aug 2023 — Oct 2025",
    image: "/images/gavs.png",
    technologies: [
      "Java 17",
      "Spring Boot",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Terraform",
    ],
  },

  {
    id: "ibs",
    title: "Senior Software Engineer",
    subtitle: "Airline Loyalty",
    company: "IBS Software",
    period: "2022 — 2023",
    image: "/images/ibs.png",
    technologies: [
      "Java",
      "PostgreSQL",
      "Kafka",
      "Microservices",
    ],
  },

  {
    id: "zoho",
    title: "Member Technical Staff",
    subtitle: "SaaS • Zoho Books",
    company: "Zoho Corporation",
    period: "2021 — 2022",
    image: "/images/zoho.png",
    technologies: [
      "Java",
      "REST APIs",
      "SaaS",
      "Backend",
    ],
  },

  {
    id: "wipro",
    title: "Project Engineer",
    subtitle: "Enterprise Applications",
    company: "Wipro",
    period: "2019 — 2021",
    image: "/images/wipro.png",
    technologies: [
      "Java",
      "REST APIs",
      "OAuth2",
      "Enterprise Applications",
    ],
  },
];