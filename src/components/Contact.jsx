import { useState } from "react";
import { MapPin } from "lucide-react";
import { siGmail, siInstagram, siPinterest } from "simple-icons";

const contactDetails = [
  { value: "leanalexis13@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=leanalexis13@gmail.com", brandIcon: siGmail },
  { value: "Philippines", icon: MapPin },
  { value: "@3lr10_", href: "https://www.instagram.com/3lr10_?stkn=MXIycWZ1MjlkbXBvdA%3D%3D&utm_source=qr", brandIcon: siInstagram },
  { value: "@elrio_", href: "https://ph.pinterest.com/elrio10_/", brandIcon: siPinterest },
];

function BrandIcon({ icon }) {
  return (
    <svg aria-hidden="true" className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d={icon.path} />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks ${formData.name}! Your message has been drafted for contact.`);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="px-6 pb-20 pt-10">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-slate-200 bg-white/70 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl md:grid-cols-2 md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4300FF]">Contact</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">Let’s design something great!</h2>
          <p className="mt-4 max-w-md text-slate-600">
            I’m available for freelance work, full-time roles, and collaborations on meaningful digital products.
          </p>

          <div className="mt-8 space-y-4 text-slate-600">
            {contactDetails.map(({ label, value, href, icon: Icon, brandIcon }) => (
              <div key={label} className="flex items-center gap-3">
                {brandIcon ? (
                  <span className="text-[#4300FF]"><BrandIcon icon={brandIcon} /></span>
                ) : (
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[#4300FF]" strokeWidth={1.8} />
                )}
                <p>
                  {label && <span className="font-medium text-slate-800">{label}</span>} {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-[#4300FF] hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-300 focus:bg-white"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-300 focus:bg-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-600">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-300 focus:bg-white"
              placeholder="Tell me about your project"
              required
            />
          </div>

          <button
            type="submit"
            className="self-end rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}