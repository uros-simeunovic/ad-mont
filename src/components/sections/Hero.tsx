import heroImg from "@/assets/heroImage.webp";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative flex h-[100vh] flex-col items-center sm:min-h-screen" id="home">
      <div className="z-20 container flex h-full flex-col justify-center px-2">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl flex flex-col">
            Precision Welding
          </h1>
          <p className="text-lg text-white">
            Delivering precision welding solutions with cutting-edge technology
            and exceptional craftsmanship.
          </p>
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button size="lg" className="bg-orange-400/90 hover:bg-[#246cb4]">
              Saznaj vise
            </Button>
            <Button size="lg" variant="outline">
              Kontaktiraj nas
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-10 h-full bg-gradient-to-r from-[#246cb4]/100 to-transparent" />
      <img
        src={heroImg}
        alt=""
        className="absolute h-full w-full object-cover object-right-bottom"
      />
    </section>
  );
};
