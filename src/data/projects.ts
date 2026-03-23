export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Personnel",
    period: "2026",
    tags: ["React", "TypeScript", "Vite"],
    summary:
      "Développement d’un portfolio moderne pour présenter mes projets, compétences et expériences avec React et TypeScript.",
    repo: "https://github.com/Chaimaa-AIT-ABDELMALEK/mon-portfolio",
  },
  {
    title: "Gestion des Étudiants",
    period: "2025",
    tags: ["Spring Boot", "MySQL", "REST API"],
    summary:
      "Application backend pour gérer les étudiants avec API REST (CRUD), base de données MySQL et documentation Swagger.",
    repo: "https://github.com/Chaimaa-AIT-ABDELMALEK/TP7-SPRINGBOOT",
  },
  {
    title: "Gestion de Projets",
    period: "2025",
    tags: ["Spring Boot", "JPA", "Hibernate"],
    summary:
      "Système de gestion des projets avec entités Projet, Phase et Employé, utilisant JPA et Hibernate pour la persistance.",
    repo: "https://github.com/zfatime046-debug/Projet-Spring.git",
  },
  {
    title: "Application Inventaire",
    period: "2025",
    tags: ["JSP", "Servlet", "Hibernate"],
    summary:
      "Application web de gestion d’inventaire avec CRUD produits et utilisateurs, utilisant JSP, Servlets et Hibernate.",
    repo: "https://github.com/Chaimaa-AIT-ABDELMALEK/inventory-management",
  },
  {
    title: "TP React (Hooks & API)",
    period: "2025",
    tags: ["React", "Axios", "Hooks"],
    summary:
      "Application React utilisant useState, useEffect et Axios pour consommer une API et afficher des données dynamiques.",
    repo: "https://github.com/Chaimaa-AIT-ABDELMALEK/TP6-REACT",
  },
  {
    title: "Application Réservations",
    period: "2025",
    tags: ["JPA", "Hibernate", "H2", "Ehcache"],
    summary:
      "Projet académique de gestion de réservations avec cache (Ehcache) et base de données H2 en mémoire.",
    repo: "https://github.com/Chaimaa-AIT-ABDELMALEK/TP5-gestion-reservations-avancee",
  },
];