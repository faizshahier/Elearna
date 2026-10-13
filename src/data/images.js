// Free Unsplash photos used as placeholders. Swap any URL for your own image.
export const unsplash = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroStudent: unsplash("1544717305-2782549b5136", 900),
  promoLaptop: unsplash("1516321318423-f06f85e504b3"),
  promoVideoCall: unsplash("1588196749597-9ff075ee6b5b"),
  offerOne: unsplash("1434030216411-0b793f4b4173"),
  offerTwo: unsplash("1513258496099-48168024aec0"),
  testimonial: unsplash("1580489944761-15a19d654956"),
  avatars: [
    unsplash("1494790108377-be9c29b29330", 120),
    unsplash("1507003211169-0a1dd7228f2d", 120),
    unsplash("1438761681033-6461ffad8d80", 120),
    unsplash("1500648767791-00dcc994a43e", 120),
  ],
};
