import { unsplash } from "./images";

export const courses = [
  {
    id: 1,
    category: "Management",
    title: "Crisis management and problem-solving strategies",
    image: unsplash("1552664730-d307ca884978"),
    price: 0,
    rating: 4.88,
    reviews: "210",
    lessons: 6,
    enrolled: "8k",
  },
  {
    id: 2,
    category: "Design",
    title: "Advanced photoshop techniques for designers",
    image: unsplash("1498050108023-c5249f4df085"),
    price: 0,
    rating: 5.0,
    reviews: "1.2K",
    lessons: 8,
    enrolled: "25k",
  },
  {
    id: 3,
    category: "Finance",
    title: "Operations management and process improvement",
    image: unsplash("1501504905252-473c47e087f8"),
    price: 0,
    rating: 5.0,
    reviews: "812",
    lessons: 12,
    enrolled: "23k",
  },
  {
    id: 4,
    category: "Development",
    title: "Database integration with MongoDB",
    image: unsplash("1522202176988-66273c2fd55f"),
    price: 59,
    rating: 4.49,
    reviews: "756",
    lessons: 10,
    enrolled: "7k",
  },
  {
    id: 5,
    category: "Management",
    title: "Risk management and business continuity",
    image: unsplash("1551836022-d5d88e9218df"),
    price: 49,
    rating: 4.88,
    reviews: "210",
    lessons: 3,
    enrolled: "8k",
  },
  {
    id: 6,
    category: "Development",
    title: "Full-stack development with the MERN stack",
    image: unsplash("1517694712202-14dd9538aa97"),
    price: 72,
    rating: 5.0,
    reviews: "985",
    lessons: 12,
    enrolled: "22k",
  },
  {
    id: 7,
    category: "Development",
    title: "Building single page applications with angular",
    image: unsplash("1573496359142-b8d87734a5a2"),
    price: 0,
    rating: 5.0,
    reviews: "328",
    lessons: 6,
    enrolled: "12k",
  },
  {
    id: 8,
    category: "Finance",
    title: "Understanding corporate finance and investments",
    image: unsplash("1460925895917-afdab827c52f"),
    price: 0,
    rating: 4.88,
    reviews: "210",
    lessons: 10,
    enrolled: "8k",
  },
  {
    id: 9,
    category: "Marketing",
    title: "Digital marketing strategy from zero to launch",
    image: unsplash("1557838923-2985c318be48"),
    price: 39,
    rating: 4.75,
    reviews: "432",
    lessons: 9,
    enrolled: "11k",
  },
  {
    id: 10,
    category: "Writing",
    title: "Content writing that converts readers to customers",
    image: unsplash("1455390582262-044cdead277a"),
    price: 0,
    rating: 4.9,
    reviews: "288",
    lessons: 7,
    enrolled: "6k",
  },
  {
    id: 11,
    category: "Design",
    title: "UI/UX design fundamentals and color systems",
    image: unsplash("1561070791-2526d30994b5"),
    price: 45,
    rating: 4.95,
    reviews: "640",
    lessons: 11,
    enrolled: "15k",
  },
  {
    id: 12,
    category: "Finance",
    title: "Accounting basics and personal tax planning",
    image: unsplash("1554224155-6726b3ff858f"),
    price: 29,
    rating: 4.6,
    reviews: "198",
    lessons: 8,
    enrolled: "5k",
  },
  {
    id: 13,
    category: "Design",
    title: "Learn interactive Web Design by building real projects",
    image: unsplash("1556761175-b413da4baf72"),
    price: 79,
    rating: 4.49,
    reviews: "756",
    lessons: 14,
    enrolled: "9k",
  },
  {
    id: 14,
    category: "Design",
    title: "Design systems and pattern libraries",
    image: unsplash("1581291518857-4e27b48ff24e"),
    price: 99,
    rating: 5.0,
    reviews: "1.2K",
    lessons: 11,
    enrolled: "6k",
  },
];

/* Tabs on the Home page */
export const courseCategories = ["All courses", "Design", "Development", "Management", "Finance"];

/* Tabs on the Courses page */
export const allCourseCategories = [...courseCategories, "Marketing", "Writing"];

export const formatPrice = (price) => (price === 0 ? "Free" : `$${price}`);

export const getCourse = (id) => courses.find((c) => c.id === Number(id));

/* Category pages: /category/design, /category/finance, … */
export const categorySlug = (category) => category.toLowerCase();
export const getCategory = (slug) =>
  allCourseCategories.find((c) => c !== "All courses" && categorySlug(c) === slug);

/* Extra info shown on the course details page (same for every demo course) */
export const courseDetails = {
  timeSpan: "10 weeks",
  level: "Expert",
  videoHours: "2 hours",
  features: [
    "Lorem ipsum dolor sit amet consectetur.",
    "Et facilisis nunc quam quam etiam donec pellentesque ut.",
    "Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam.",
    "Molestie pharetra morbi eu odio volutpat.",
    "Cursus velit elit senectus auctor vitae tristique velit.",
    "Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada.",
  ],
  lessons: [
    "Introduction",
    "Core concepts",
    "Tools and workflow",
    "Real-world project",
    "Review and next steps",
  ],
  faqs: [
    {
      q: "What are some current trends in this field?",
      a: "Automation, data-driven decisions and remote collaboration are shaping the field. Each lesson includes up-to-date examples so you learn what teams use today.",
    },
    {
      q: "Do I need any experience before starting?",
      a: "No. The first lessons cover the basics, and each new idea builds on the one before it.",
    },
    {
      q: "How long do I have access to the course?",
      a: "You get lifetime access, including any future updates to the lessons and materials.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes. When you finish all lessons and the final project you receive a certificate you can share on LinkedIn.",
    },
    {
      q: "Can I ask the instructor questions?",
      a: "Yes. Use the Query tab on this page or the discussion area inside each lesson.",
    },
  ],
};
