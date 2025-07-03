import logo from "@/assets/AD mont logo 2.svg";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    if (window.location.href.split("/")[3] && sectionId == "home") {
      window.location.href = "/";
    }
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              onClick={() => scrollToSection("home")}
              src={logo}
              alt="AD-Mont Logo"
              className="w-24 cursor-pointer"
            />
            <p className="text-gray-300 leading-relaxed">
              AD-Mont je firma specijalizovana za izradu čeličnih konstrukcija, 
              metalnog nameštaja i zavarivanje. Kombinujemo kvalitet, inovaciju 
              i pouzdanost u svakom projektu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#256eb6]">Brze Veze</h3>
            <ul className="space-y-2">
              <li>
                <Button
                  variant={"link"}
                  onClick={() => scrollToSection("home")}
                  className="hover:text-[#256eb6] text-gray-300 p-0 h-auto"
                >
                  Početna
                </Button>
              </li>
              <li>
                <Button
                  variant={"link"}
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#256eb6] text-gray-300 p-0 h-auto"
                >
                  O Nama
                </Button>
              </li>
              <li>
                <Button
                  variant={"link"}
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[#256eb6] text-gray-300 p-0 h-auto"
                >
                  Usluge
                </Button>
              </li>
              <li>
                <Button
                  variant={"link"}
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#256eb6] text-gray-300 p-0 h-auto"
                >
                  Kontakt
                </Button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#256eb6]">Usluge</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Metalni nameštaj po meri</li>
              <li>Čelične konstrukcije</li>
              <li>Ograde i kapije</li>
              <li>TIG zavarivanje</li>
              <li>CNC plazma sečenje</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#256eb6]">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#256eb6]" />
                <div>
                  <p className="text-gray-300">+381 11 123 4567</p>
                  <p className="text-gray-300">+381 63 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#256eb6]" />
                <div>
                  <p className="text-gray-300">info@ad-mont.rs</p>
                  <p className="text-gray-300">prodaja@ad-mont.rs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#256eb6]" />
                <div>
                  <p className="text-gray-300">Industrijska zona 15</p>
                  <p className="text-gray-300">11000 Beograd, Srbija</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#256eb6]" />
                <div>
                  <p className="text-gray-300">Pon-Pet: 08:00 - 17:00</p>
                  <p className="text-gray-300">Subota: 08:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AD-Mont. Sva prava zadržana.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="hover:text-[#256eb6] cursor-pointer transition-colors">
                Politika privatnosti
              </span>
              <span className="hover:text-[#256eb6] cursor-pointer transition-colors">
                Uslovi korišćenja
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
