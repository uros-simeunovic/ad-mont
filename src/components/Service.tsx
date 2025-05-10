import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { ServiceType } from "@/types/Service";

export const Service = ({ service }: { service: ServiceType }) => {
  const images: Record<string, string> = import.meta.glob(
    "../assets/gallery/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      import: "default",
    }
  );

  const imagePaths = Object.values(images);
  return (
    <div className="space-y-32">
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <Link
                  to="/"
                  className="text-sm text-[#246cb4] hover:underline flex flex-row items-center gap-2"
                >
                  <div className="w-12 h-12 bg-[#246cb4]/10 rounded-full flex items-center justify-center">
                    <ChevronLeft className="text-[#246cb4]" />
                  </div>
                  <div>Vrati na pocetnu</div>
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#246cb4]">
                {service.title}
              </h1>
              <p className="text-lg text-[#246cb4]/80">{service.subtitle}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={service.img}
                alt="service-hero-image"
                className="rounded-lg shadow-md w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto container">
        <h2 className="text-2xl font-bold mb-4 text-[#246cb4]">Opis usluge</h2>
        <p className="text-[#246cb4] mb-4 ">{service.description1}</p>
        <p className="text-[#246cb4]/80">{service.description2}</p>
      </section>
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#246cb4]">Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
            <img
              src={service.img}
              width={500}
              height={400}
              alt="3D terrain model from drone data"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <ul className="list-disc pl-6 space-y-2 text-[#246cb4]/80">
              <li>Centimeter-level accuracy for precise measurements</li>
              <li>Rapid data acquisition covering large areas efficiently</li>
              <li>
                Comprehensive data products including orthomosaics, DEMs, and 3D
                models
              </li>
              <li>
                Cost-effective alternative to traditional surveying methods
              </li>
              <li>
                Reduced safety risks by eliminating the need to access hazardous
                areas
              </li>
              <li>
                Regular surveys enable progress tracking and change detection
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto container">
        <h2 className="text-2xl font-bold mb-4">Proces izrade</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {service.processSteps.map((step) => (
            <div className="border rounded-lg p-6">
              <div className="w-10 h-10 bg-[#246cb4]/10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-[#246cb4]">{step.number}</span>
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto container">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-4xl text-[#246cb4] font-bold">Galerija</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {imagePaths.map((path, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={path}
                alt={`Image ${index + 1}`}
                className="rounded-xl h-[300px] w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto container">
        <h2 className="text-2xl font-bold mb-6 text-[#246cb4]">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {service.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-lg cursor-pointer text-[#246cb4]/80">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="py-16 bg-[#246cb4]/20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#246cb4]">
              Da li ste spremni da saradjujemo?
            </h2>
            <p className="text-lg text-[#246cb4]/80 mb-8">
              Pokrenimo diskusiju kako naše usluge mogu pomoći vama.
            </p>
            <Button className="bg-[#246cb4] hover:bg-[#3e5b77] px-8 py-6 text-lg h-auto">
              Kontaktirajte nas
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
