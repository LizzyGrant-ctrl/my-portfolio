const skills = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Figma",
  "Canva",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Technical Skills</h2>
        </div>

        <div className="ios-card rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
