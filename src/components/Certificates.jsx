import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aiiCertificate from "../assets/AII Certificate.png";
import promptingCertificate from "../assets/Mastering Prompting Certficate.png";
import uiCertificate from "../assets/UI Certificate.png";
import uxCertificate from "../assets/UX Certificate.png";

const certificates = [
  { title: "Agentic Artificial Intelligence Certificate", image: aiiCertificate },
  { title: "Mastering Prompting Certificate", image: promptingCertificate },
  { title: "UI Certificate", image: uiCertificate },
  { title: "UX Certificate", image: uxCertificate },
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCertificate = certificates[activeIndex];

  function showPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? certificates.length - 1 : currentIndex - 1,
    );
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % certificates.length);
  }

  return (
    <section id="certificates" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">My Certificates</h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/75 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
          <div className="flex min-h-[320px] items-center justify-center sm:min-h-[460px]">
            <img
              key={activeCertificate.image}
              src={activeCertificate.image}
              alt={activeCertificate.title}
              className="certificate-slide max-h-[65vh] w-full object-contain"
            />
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous certificate"
              className="certificate-control flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#4300FF] hover:text-[#4300FF]"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>

            <div className="min-w-0 text-center">
              <h3 className="truncate text-base font-semibold text-slate-900 sm:text-lg">{activeCertificate.title}</h3>
              <div className="mt-3 flex justify-center gap-2">
                {certificates.map((certificate, index) => (
                  <button
                    key={certificate.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${certificate.title}`}
                    className={`certificate-control h-2.5 w-2.5 rounded-full transition ${
                      index === activeIndex ? "bg-[#4300FF]" : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next certificate"
              className="certificate-control flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#4300FF] hover:text-[#4300FF]"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
