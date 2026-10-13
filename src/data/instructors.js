import { unsplash } from "./images";

const portrait = (id) => unsplash(id, 600) + "&crop=faces";

export const instructors = [
  { name: "Leslie Upton", role: "Instructor", image: portrait("1544005313-94ddf0286df2") },
  { name: "Darnell Kuphal", role: "Instructor", image: portrait("1599566150163-29194dcaad36") },
  { name: "Steven Roob", role: "Instructor", image: portrait("1527980965255-d3b416303d12") },
  { name: "Wanda Abshire", role: "Instructor", image: portrait("1573497019940-1c28c88b4f3e") },
  { name: "Lee Schmitt", role: "Instructor", image: portrait("1506794778202-cad84cf45f1d") },
  { name: "Jasmine Konopelski", role: "Instructor", image: portrait("1438761681033-6461ffad8d80") },
  { name: "Tonya Flatley", role: "Instructor", image: portrait("1494790108377-be9c29b29330") },
  { name: "Colin Fay", role: "Instructor", image: portrait("1472099645785-5658abf4ff4e") },
];
