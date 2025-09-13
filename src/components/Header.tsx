import { Wrench, Factory, Zap, ChevronDown, Home, Users, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/AD mont logo 1.svg";
import { useSideBar } from "@/hooks/useSideBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const serviceLinks = [
  {
    name: "Metalni Nameštaj",
    href: "/metalni-namestaj",
    icon: <Wrench className="h-5 w-5" />,
    description: "Custom metal furniture for residential and commercial spaces"
  },
  {
    name: "Čelične Konstrukcije",
    href: "/celicne-konstrukcije",
    icon: <Factory className="h-5 w-5" />,
    description: "Steel structures, fences, and industrial solutions"
  },
  {
    name: "TIG Zavarivanje",
    href: "/tig-zavarivanje",
    icon: <Zap className="h-5 w-5" />,
    description: "Precision TIG welding and pipeline services"
  },
];

export const Header = () => {
  const { isOpen, onClose, onOpen } = useSideBar();

  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    onClose();
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page and scroll to section
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center group">
          <img src={logo} alt="AD-Mont Logo" className="w-14 transition-transform duration-300 group-hover:scale-105" />
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Button
            variant={"link"}
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
            className="text-sm font-semibold text-[#4f5050] hover:text-[#256eb6] transition-colors"
          >
            Početna
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-medium transition-colors hover:text-primary cursor-pointer group">
              <div className="text-sm font-semibold text-[#4f5050] group-hover:text-[#256eb6] px-2 transition-colors flex items-center gap-1">
                Usluge
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-80 p-2 bg-white border border-gray-200 shadow-xl rounded-xl">
              <div className="grid gap-1">
                {serviceLinks.map((service, index) => (
                  <DropdownMenuItem key={index} asChild className="p-0">
                    <Link
                      to={service.href}
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-[#256eb6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#256eb6]/20 transition-colors">
                        <div className="text-[#256eb6]">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[#4f5050] group-hover:text-[#256eb6] transition-colors">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant={"link"}
            onClick={() => scrollToSection("about")}
            className="text-sm font-semibold text-[#4f5050] hover:text-[#256eb6] transition-colors"
          >
            O Nama
          </Button>
          {/* <Button
            variant={"link"}
            onClick={() => scrollToSection("services")}
            className="text-sm font-semibold text-[#4f5050] hover:text-[#256eb6] transition-colors"
          >
            Usluge
          </Button> */}
          <Button
            variant={"link"}
            onClick={() => scrollToSection("contact")}
            className="text-sm font-semibold text-[#4f5050] hover:text-[#256eb6] transition-colors"
          >
            Kontakt
          </Button>
        </nav>
        {/* Beautiful Hamburger Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative group"
          onClick={onOpen}
        >
          <div className="flex flex-col items-center justify-center w-6 h-6">
            <span className={`block w-6 h-0.5 bg-[#4f5050] transition-all duration-300 group-hover:bg-[#256eb6] ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#4f5050] transition-all duration-300 group-hover:bg-[#256eb6] my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#4f5050] transition-all duration-300 group-hover:bg-[#256eb6] ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Beautiful Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent
            side="right"
            className="w-full max-w-sm border-none bg-gradient-to-b from-white to-gray-50 p-0 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center p-6 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center gap-3">
                <img src={logo} alt="AD-Mont Logo" className="w-10 h-10" />
                <span className="text-lg font-bold text-[#4f5050]">AD-Mont</span>
              </div>
            </div>

            {/* Navigation Menu - Scrollable */}
            <nav className="flex-1 px-6 overflow-y-auto">
              <div className="space-y-6 py-6">
                {/* Main Navigation */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Navigacija
                  </h3>

                  <button
                    onClick={() => {
                      onClose();
                      navigate("/");
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#256eb6]/5 transition-all duration-300 group w-full text-left"
                  >
                    <div className="w-10 h-10 bg-[#256eb6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#256eb6]/20 transition-colors">
                      <Home className="h-5 w-5 text-[#256eb6]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#4f5050] group-hover:text-[#256eb6] transition-colors">
                        Početna
                      </div>
                      <div className="text-sm text-gray-500">
                        Naslovna strana
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection("about");
                      onClose();
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#256eb6]/5 transition-all duration-300 group w-full text-left"
                  >
                    <div className="w-10 h-10 bg-[#256eb6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#256eb6]/20 transition-colors">
                      <Users className="h-5 w-5 text-[#256eb6]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#4f5050] group-hover:text-[#256eb6] transition-colors">
                        O Nama
                      </div>
                      <div className="text-sm text-gray-500">
                        Više o nama
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection("services");
                      onClose();
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#256eb6]/5 transition-all duration-300 group w-full text-left"
                  >
                    <div className="w-10 h-10 bg-[#256eb6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#256eb6]/20 transition-colors">
                      <Wrench className="h-5 w-5 text-[#256eb6]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#4f5050] group-hover:text-[#256eb6] transition-colors">
                        Usluge
                      </div>
                      <div className="text-sm text-gray-500">
                        Naše usluge
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      onClose();
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#256eb6]/5 transition-all duration-300 group w-full text-left"
                  >
                    <div className="w-10 h-10 bg-[#256eb6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#256eb6]/20 transition-colors">
                      <Phone className="h-5 w-5 text-[#256eb6]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#4f5050] group-hover:text-[#256eb6] transition-colors">
                        Kontakt
                      </div>
                      <div className="text-sm text-gray-500">
                        Kontaktirajte nas
                      </div>
                    </div>
                  </button>
                </div>

                {/* Services Section */}
                <div className="">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Usluge
                  </h3>

                  {serviceLinks.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      onClick={onClose}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#256eb6]/5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-[#256eb6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#256eb6]/20 transition-colors flex-shrink-0">
                        <div className="text-[#256eb6]">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[#4f5050] group-hover:text-[#256eb6] transition-colors">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 flex-shrink-0">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">
                  AD-Mont - Vaš partner za metalne konstrukcije
                </p>
                <p className="text-xs text-gray-400">
                  Kvalitet • Pouzdanost • Profesionalizam
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
