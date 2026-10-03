export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  image: string;
  icon:
    | "code"
    | "backend"
    | "cloud"
    | "database"
    | "devops"
    | "observability";
};

export const coreEngineeringSkills: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    subtitle: "Core programming",
    image: "/images/languages.png",
    technologies: [
      "Java 17",
      "SQL",
      "Python",
      "Perl",
    ],
    icon: "code",
  },
  {
    id: "backend",
    title: "Backend & Architecture",
    subtitle: "Application engineering",
    image: "/images/languages.png",
    technologies: [
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "Microservices",
      "REST APIs",
      "Distributed Systems",
    ],
    icon: "backend",
  },
  {
    id: "cloud",
    title: "Cloud",
    subtitle: "Cloud platforms",
    image: "/images/languages.png",
    technologies: [
      "AWS",
      "Azure",
      "GCP",
    ],
    icon: "cloud",
  },
];

export const cloudAndDataSkills: SkillCategory[] = [
  {
    id: "data",
    title: "Databases & Data",
    subtitle: "Data platforms",
    image: "/images/languages.png",
    technologies: [
      "PostgreSQL",
      "Oracle SQL",
      "MySQL",
      "BigQuery",
      "Redis",
    ],
    icon: "database",
  },
];

export const platformEngineeringSkills: SkillCategory[] = [
  {
    id: "devops",
    title: "DevOps & Delivery",
    subtitle: "Delivery & infrastructure",
    image: "/images/languages.png",
    technologies: [
      "GitHub Actions",
      "Jenkins",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Maven",
      "Gradle",
    ],
    icon: "devops",
  },
  {
    id: "messaging-observability",
    title: "Messaging & Observability",
    subtitle: "Distributed systems & operations",
    image: "/images/languages.png",
    technologies: [
      "Kafka",
      "Grafana",
      "Prometheus",
      "Splunk",
    ],
    icon: "observability",
  },
];