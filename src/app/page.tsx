import About from "@/section/About";
import Biography from "@/section/Biography";
import Contact from "@/section/Contact";
import Events from "@/section/Events";
import Hero from "@/section/Hero";
import Mssg from "@/section/Mssg";

export default function Home() {
  return (
    <main>
      <Hero />
      <Events />
      <Biography />
      <Mssg />
      <About />
      <Contact />
    </main>
  );
}
