import logo from "@/assets/AD mont logo 2.svg";
import { Button } from "./ui/button";

export const Footer = () => {
  
  const scrollToSection = (sectionId: string) => {
    if (window.location.href.split("/")[3] && sectionId == "home") {
      window.location.href = "/"
    }
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-[#0a2b4c] px-2">
      <div className="container mx-auto py-4">
        <div className="flex flex-row justify-evenly">
          <img src={logo} alt="logo" className="w-24" />
          <div className="flex flex-col items-center">
            <h3 className="mb-4 font-bold text-xl text-[#C19959]">Sekcije</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant={"link"} onClick={() => scrollToSection("home")} className="hover:text-foreground text-white">
                  Početna
                </Button>
              </li>
              <li>
                <Button variant={"link"} onClick={() => scrollToSection("cards")} className="hover:text-foreground text-white">
                  Servisi
                </Button>
              </li>
              <li>
                <Button variant={"link"} onClick={() => scrollToSection("gallery")} className="hover:text-foreground text-white">
                  Galerija
                </Button>
              </li>
              <li>
                <Button variant={"link"} onClick={() => scrollToSection("contact")} className="hover:text-foreground text-white">
                  Kontakt
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-white">
          <p>© 2025 AD-Mont. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
