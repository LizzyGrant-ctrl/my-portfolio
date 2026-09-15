export default function Navbar() {
  const links = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "CERTIFICATES", href: "#certificates" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#about" className="text-base font-bold tracking-[0.12em] text-[#4300FF] sm:text-lg sm:tracking-[0.15em]">
          ELRIO'S PORTFOLIO
        </a>

        <nav className="order-3 flex w-full items-center justify-center gap-3 overflow-x-auto text-[11px] text-slate-600 sm:gap-5 sm:text-xs md:order-none md:w-auto md:gap-6 md:text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="shrink-0 transition hover:text-[#4300FF]">
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}