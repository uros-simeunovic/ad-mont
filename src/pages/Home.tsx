import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <main className="flex-1">
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
};
