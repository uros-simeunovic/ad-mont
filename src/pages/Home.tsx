import { Cards } from "@/components/sections/Cards";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <main className="flex-1 px-2">
        <Cards />
        <Gallery />
        <Contact />
      </main>
    </>
  );
};
