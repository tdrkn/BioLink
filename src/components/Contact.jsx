import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { icon: Github, url: 'https://github.com/youruser', label: 'GitHub' },
  { icon: Linkedin, url: 'https://linkedin.com/in/youruser', label: 'LinkedIn' },
  { icon: Mail, url: 'mailto:you@example.com', label: 'Email' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 container mx-auto px-4 text-center">
      <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold mb-8">Get in touch</h2>
      <div className="flex justify-center gap-6">
        {links.map(({ icon: Icon, url, label }) => (
          <motion.a
            key={label}
            href={url}
            aria-label={label}
            whileHover={{ scale: 1.2 }}
            className="p-3 rounded-full bg-card backdrop-blur transition"
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
