export default function About() {
  return (
    <section id="about" className="py-20 container mx-auto px-4">
      <div className="bg-card backdrop-blur p-8 rounded-xl">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold mb-4">About Me</h2>
        <p className="text-[clamp(1rem,3vw,1.25rem)] leading-relaxed">
          I’m a passionate developer who loves building responsive and engaging web applications.
          This little site is a quick overview of my work and how to reach me.
        </p>
      </div>
    </section>
  );
}
