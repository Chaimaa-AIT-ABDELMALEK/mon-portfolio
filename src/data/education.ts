export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences et Techniques (FST)",
    degree: "Licence",
    field: "Systèmes Informatiques et Réseaux (SIR)",
    location: "Marrakech",
    start: "2023-09",
    end: "2026-07",
    courses: [
      "Programmation Java",
      "Développement Web",
      "Bases de Données",
      "Réseaux Informatiques",
      "Génie Logiciel"
    ],
    highlights: [
      "Réalisation de projets en React et Spring Boot",
      "Développement d’applications web (JSP/Servlet)",
      "Conception et gestion de bases de données MySQL"
    ]
  }
];