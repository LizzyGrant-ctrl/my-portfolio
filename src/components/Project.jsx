import { useEffect, useState } from "react";
import portfolioPreview from "../assets/LDR.jpg";
import vodPoster from "../assets/VOD.jpg";
import pdPoster from "../assets/PD.jpg";
import qodPoster from "../assets/QOD.jpg";
import dgPoster from "../assets/DG.jpg";
import audreyMagazine from "../assets/AUDREY HOBERT GQ.jpg";
import marinaMagazine from "../assets/MARINA COSMOPOLITAN.jpg";
import ningNingMagazine from "../assets/NING NING VOGUE.jpg";
import seulgiMagazine from "../assets/SEULGI DAZED.jpg";
import charliMagazine from "../assets/CHARLI XCX BAZAAR.jpg";
import casSticker from "../assets/CAS STICKER.png";
import charliSticker from "../assets/CHARLI XCX STICKER.png";
import lanaSticker from "../assets/LANA STICKER.png";
import legoSticker from "../assets/LEGO STICKER.png";
import malcolmToddSticker from "../assets/MALCOLMTODD STICKER.png";
import mitskiSticker from "../assets/MITSKI STICKER.png";
import tylerSticker from "../assets/TYLER STICKER.png";

const categories = ["All", "Poster", "Magazine Cover", "Stickers & Stuff"];

const projects = [
  {
    id: 1,
    title: "Lana Del Rey Poster",
    category: "Poster",
    image: portfolioPreview,
  },
  {
    id: 2,
    title: "Valley of the Dolls Poster",
    category: "Poster",
    image: vodPoster,
  },
  {
    id: 3,
    title: "Playing Dangerous Poster",
    category: "Poster",
    image: pdPoster,
  },
  {
    id: 4,
    title: "Queen of Disaster Poster",
    category: "Poster",
    image: qodPoster,
  },
  {
    id: 5,
    title: "Dangerous Girl Poster",
    category: "Poster",
    image: dgPoster,
  },
  {
    id: 6,
    title: "Audrey GQ",
    category: "Magazine Cover",
    image: audreyMagazine,
  },
  {
    id: 7,
    title: "Marina Diamandis Cosmopolitan",
    category: "Magazine Cover",
    image: marinaMagazine,
  },
  {
    id: 8,
    title: "Ning Yi Zhuo Vogue",
    category: "Magazine Cover",
    image: ningNingMagazine,
  },
  {
    id: 9,
    title: "Seulgi Dazed",
    category: "Magazine Cover",
    image: seulgiMagazine,
  },
  {
    id: 10,
    title: "Charli XCX Bazaar",
    category: "Magazine Cover",
    image: charliMagazine,
  },
  {
    id: 11,
    title: "CAS Sticker",
    category: "Stickers & Stuff",
    image: casSticker,
  },
  {
    id: 12,
    title: "Charli XCX Sticker",
    category: "Stickers & Stuff",
    image: charliSticker,
  },
  {
    id: 13,
    title: "Lana Sticker",
    category: "Stickers & Stuff",
    image: lanaSticker,
  },
  {
    id: 14,
    title: "LEGO Sticker",
    category: "Stickers & Stuff",
    image: legoSticker,
  },
  {
    id: 15,
    title: "Malcolm Todd Sticker",
    category: "Stickers & Stuff",
    image: malcolmToddSticker,
  },
  {
    id: 16,
    title: "Mitski Sticker",
    category: "Stickers & Stuff",
    image: mitskiSticker,
  },
  {
    id: 17,
    title: "Tyler Sticker",
    category: "Stickers & Stuff",
    image: tylerSticker,
  },
];

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedProject(null);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">My Work Collection</h2>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={
                activeFilter === category
                  ? "filter-button rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-200"
                  : "filter-button rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="project-card group overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 text-left shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(6,182,212,0.12)]"
            >
              <div className="m-3 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="block h-auto max-h-[28rem] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4300FF]">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="project-modal-panel relative w-fit max-w-[95vw] overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-700 shadow-md"
            >
              Close
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="block h-auto max-h-[90vh] max-w-[95vw] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
