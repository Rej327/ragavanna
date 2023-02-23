import About from "@/section/About";
import Biography from "@/section/Biography";
import Contact from "@/section/Contact";
import Events from "@/section/Events";
import Footer from "@/section/Footer";
import Hero from "@/section/Hero";
import Mssg from "@/section/Mssg";
import Navbar from "@/section/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Events />
      <Biography />
      <Mssg />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
