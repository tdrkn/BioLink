import { motion } from 'framer-motion';

const projects = [
  { name: 'Project One', url: '#' },
  { name: 'Project Two', url: '#' },
  { name: 'Project Three', url: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 container mx-auto px-4">
      <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.a
            key={p.name}
            href={p.url}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.25)' }}
            className="flex items-center justify-center p-6 rounded-xl bg-card backdrop-blur hover:bg-opacity-30 transition"
          >
            {p.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
