export default function InstructorCard({ person }) {
  return (
    <div className="group text-center">
      <div className="overflow-hidden rounded bg-gradient-to-b from-gray-200 to-light">
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 font-heading text-lg font-medium">{person.name}</p>
      <p className="text-xs uppercase tracking-wider text-muted">{person.role}</p>
    </div>
  );
}
