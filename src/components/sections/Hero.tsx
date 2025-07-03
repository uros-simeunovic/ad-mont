import heroImg from "@/assets/heroImage.jpg";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Zap } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center py-20" id="home">
      <div className="z-20 container flex h-full flex-col justify-center px-4">
        <div className="space-y-8 max-w-4xl">
          <div className="flex items-center gap-2 text-[#256eb6] mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">AD-Mont</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            <span className="block">Čelične Konstrukcije</span>
            <span className="block text-[#256eb6]">i Metalni Nameštaj</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
            Specijalizovani smo za izradu čeličnih konstrukcija, metalnog nameštaja, 
            kapija i ograda. Kombinujemo vrhunski kvalitet, moderne tehnologije i 
            dugogodišnje iskustvo za trajna rešenja.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-[#256eb6] hover:bg-[#1e5a9a] text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => scrollToSection("services")}
            >
              Naše Usluge
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 pt-8 text-white">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#256eb6]" />
              <span className="font-medium">Garancija Kvaliteta</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#256eb6]" />
              <span className="font-medium">Brza Izrada</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#256eb6]" />
              <span className="font-medium">Po Meri</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 z-10 h-full bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
      
      {/* Additional decorative elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#256eb6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#4f5050]/10 rounded-full blur-3xl"></div>
      </div>
      
      <img
        src={heroImg}
        alt="AD-Mont welding and metal fabrication workshop"
        className="absolute h-full w-full object-cover object-center"
      />
    </section>
  );
};
