import { motion } from 'framer-motion';

const images = [
  '/images/pic1.jpg',
  '/images/pic2.jpg',
  '/images/pic3.jpg',
  '/images/pic4.jpg',
  '/images/pic5.jpg',
  '/images/pic6.jpg',
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 container mx-auto px-4">
      <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold mb-8 text-center">Portfolio</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {images.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt=""
            className="rounded-xl object-cover w-full h-60 bg-card backdrop-blur"
            whileHover={{ scale: 1.02, rotate: 1 }}
          />
        ))}
      </div>
    </section>
  );
}
