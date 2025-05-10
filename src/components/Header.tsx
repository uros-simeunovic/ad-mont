import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
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
  { name: "MIG Welding", href: "/service1" },
  { name: "TIG Welding", href: "/service2" },
  { name: "EXA Welding", href: "/service3" },
];

export const Header = () => {
  const { isOpen, onClose, onOpen } = useSideBar();

  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (
      window.location.href.split("/").includes("gallery") &&
      sectionId == "home"
    ) {
      window.location.href = "/";
    }
    onClose();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-2">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-14" />
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Button
            variant={"link"}
            onClick={() => navigate("/")}
            className="text-sm font-bold text-[#246cb4] hover:text-black"
          >
            Početna
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-medium transition-colors hover:text-primary cursor-pointer">
              <div className="text-sm font-bold text-[#246cb4] hover:text-black px-2">
                Usluge
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {serviceLinks.map((service, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link to={service.href}>{service.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant={"link"}
            onClick={() => scrollToSection("gallery")}
            className="text-sm font-bold text-[#246cb4] hover:text-black"
          >
            Galerija
          </Button>
          <Button
            variant={"link"}
            onClick={() => scrollToSection("contact")}
            className="text-sm font-bold text-[#246cb4] hover:text-black"
          >
            Kontakt
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onOpen}
        >
          <Menu className="h-6 w-6 text-[#246cb4]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent
            side="right"
            className="w-[300px] border-none bg-[#0a2b4c] sm:w-[400px]"
          >
            <SheetDescription className="hidden">
              Meni za telefone
            </SheetDescription>
            <SheetTitle className="hidden">Meni</SheetTitle>
            <nav className="flex min-h-screen flex-col justify-between px-10 pt-20 pb-40">
              <div className="flex flex-col gap-4">
                <Button
                  variant={"link"}
                  onClick={() => navigate("/")}
                  className="text-sm font-medium text-[#246cb4] hover:text-black bg-white"
                >
                  Početna
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 font-medium transition-colors hover:text-primary cursor-pointer">
                    <div className="text-sm w-full  font-medium text-[#246cb4] hover:text-black bg-white p-2 rounded-md">
                      Usluge
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {serviceLinks.map((service, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <Link to={service.href}>{service.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  variant={"link"}
                  onClick={() => scrollToSection("gallery")}
                  className="text-sm font-medium text-[#246cb4] hover:text-black bg-white"
                >
                  Galerija
                </Button>
                <Button
                  variant={"link"}
                  onClick={() => scrollToSection("contact")}
                  className="text-sm font-medium text-[#246cb4] hover:text-black bg-white"
                >
                  Kontakt
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
