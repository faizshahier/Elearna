import { unsplash } from "./images";

export const posts = [
  {
    slug: "improve-knowledge-retention-with-visual-learning",
    category: "Career",
    title: "Improve knowledge retention with visual learning",
    date: "2024-10-04",
    image: unsplash("1516321318423-f06f85e504b3"),
  },
  {
    slug: "master-online-learning-with-proven-strategies",
    category: "Development",
    title: "Master online learning with proven strategies",
    date: "2024-10-04",
    image: unsplash("1499750310107-5fef28a66643"),
  },
  {
    slug: "how-to-enhance-your-learning-experience-today",
    category: "Teaching",
    title: "How to enhance your learning experience today",
    date: "2024-10-03",
    image: unsplash("1517694712202-14dd9538aa97"),
  },
  {
    slug: "the-evolution-of-teaching-tools-in-the-21st-century",
    category: "Career",
    title: "The evolution of teaching tools in the 21st century",
    date: "2024-09-17",
    image: unsplash("1588072432836-e10032774350"),
  },
  {
    slug: "the-role-of-parental-involvement-in-academic-achievement",
    category: "Development",
    title: "The role of parental involvement in academic achievement",
    date: "2024-09-16",
    image: unsplash("1427504494785-3a9ca7044f45"),
  },
  {
    slug: "the-role-of-technology-in-modern-classrooms",
    category: "Teaching",
    title: "The role of technology in modern classrooms",
    date: "2024-09-14",
    image: unsplash("1509062522246-3755977927d7"),
  },
  {
    slug: "study-habits-that-actually-work",
    category: "Career",
    title: "Study habits that actually work for busy adults",
    date: "2024-09-02",
    image: unsplash("1434030216411-0b793f4b4173"),
  },
  {
    slug: "building-a-portfolio-while-you-learn",
    category: "Development",
    title: "Building a portfolio while you learn to code",
    date: "2024-08-27",
    image: unsplash("1513258496099-48168024aec0"),
  },
  {
    slug: "reading-lists-for-lifelong-learners",
    category: "Teaching",
    title: "Reading lists for lifelong learners",
    date: "2024-08-19",
    image: unsplash("1456513080510-7bf3a84b82f8"),
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
