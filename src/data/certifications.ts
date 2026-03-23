export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Introduction to Web Development",
    issuer: "Coursera",
    issueDate: "2025-05",
    skills: ["HTML", "CSS", "JavaScript"],
    tags: ["Web", "Frontend"],
        status: "active"
  },
  {
    title: "Java Programming",
    issuer: "Udemy",
    issueDate: "2025-04",
    skills: ["Java", "OOP"],
    tags: ["Backend", "Programming"],
    status: "active"
  }
];