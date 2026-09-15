import profilePicture from "../assets/2x2.png";
import { FaFigma, FaPalette } from "react-icons/fa6";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

const designTools = [
  { name: "Photoshop", icon: DiPhotoshop },
  { name: "Illustrator", icon: DiIllustrator },
  { name: "Figma", icon: FaFigma },
  { name: "Canva", icon: FaPalette },
];

export default function About() {
  const skills = ["Posters", "Magazines", "Typographic Design", "UI/UX", "Graphic Design"];

  return (
    <section id="about" className="px-6 pb-16 pt-20">
      <div className="relative mx-auto max-w-6xl">
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-200/60 to-indigo-200/80 blur-2xl" />
        <div className="ios-card profile-card grid items-center gap-12 rounded-[2rem] p-8 shadow-none md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#4300FF]">
            Graphic Designer  
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            I Create Graphic Designs
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Hi, I’m Lean Alexis A. Halili — a passionate graphic designer focused on creating visually appealing and user-friendly digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex rounded-full bg-[#4300FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3500cc]"
            >
              My Works
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#4300FF] hover:text-[#4300FF]"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

          <div className="md:self-stretch md:border-l md:border-slate-200/80 md:pl-12 md:flex md:flex-col md:justify-center">
            <p className="text-sm uppercase tracking-[0.2em] text-[#4300FF]">Profile</p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={profilePicture}
                alt="Lean Alexis A. Halili"
                className="h-24 w-24 rounded-[1.5rem] object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Lean Alexis A. Halili</h2>
                <p className="text-slate-500">Graphic Designer</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4300FF]">Education</p>
              <p className="mt-2 font-semibold text-slate-900">Bulacan State University</p>
              <p className="mt-1 text-sm text-slate-600">Bachelor of Science in Information Technology</p>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4300FF]">Languages</p>
              <p className="mt-2 font-semibold text-black">Filipino <span className="font-normal">and</span> English</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {designTools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 text-[#4300FF]">
                  <tool.icon aria-hidden="true" className="h-7 w-7" />
                  <span className="text-sm font-semibold text-slate-700">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
