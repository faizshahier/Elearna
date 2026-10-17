/* Career page: open instructor positions (from the Career design) */
export const jobs = [
  { title: "Software development instructor", posts: 50, salary: "$23K - $35K", experience: "2 years" },
  { title: "Machine learning educator", posts: 35, salary: "$20K - $35K", experience: "2 years" },
  { title: "Blockchain Technology Instructor", posts: 47, salary: "$26K - $40K", experience: "3 years" },
  { title: "Digital Design and UX Instructor", posts: 50, salary: "$23K - $35K", experience: "2 years" },
].map((job) => ({
  ...job,
  address: "4367 Lula Shores, Derekton 48438",
  description: "Lorem ipsum dolor sit amet consectetur.",
  type: "Full-time, Permanent",
}));
