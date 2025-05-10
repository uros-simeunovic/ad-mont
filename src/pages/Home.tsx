import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export const Home = () => {
  return (
    <>
      <Hero />
      <main className="flex-1 px-2">
        <Services />
        {/* <Gallery />
        <Contact /> */}
      </main>
    </>
  );
};
