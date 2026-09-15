import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Certificates />
      <Contact />
    </main>
  );
}