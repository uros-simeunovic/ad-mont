import { ChevronLeft, CheckCircle, ArrowRight, ZoomIn } from "lucide-react";
import { Link, useNavigate } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { ServiceType } from "@/types/Service";
import { ImageModal } from "@/components/ImageModal";
import { useState } from "react";

export const Service = ({ service, galleryImages }: { service: ServiceType; galleryImages?: string[] }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use provided gallery images or fall back to all gallery images
  const imagePaths = galleryImages || (() => {
    const images: Record<string, string> = import.meta.glob(
      "../assets/gallery/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default",
      }
    );
    return Object.values(images);
  })();

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : imagePaths.length - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev < imagePaths.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <Link
                  to="/"
                  className="text-sm text-[#256eb6] hover:text-[#1e5a9a] transition-colors flex items-center gap-2 group"
                >
                  <div className="w-10 h-10 bg-[#256eb6]/10 rounded-full flex items-center justify-center group-hover:bg-[#256eb6]/20 transition-colors">
                    <ChevronLeft className="text-[#256eb6] h-5 w-5" />
                  </div>
                  <span className="font-medium">Vrati na početnu</span>
                </Link>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-[#4f5050]">{service.title.split(' ').slice(0, -1).join(' ')}</span>
                <span className="text-[#256eb6]"> {service.title.split(' ').slice(-1)}</span>
              </h1>
              <p className="text-xl text-[#256eb6] font-medium">{service.subtitle}</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description1}
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative group">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transition-all duration-500 ease-out group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#4f5050] text-center">
            O našoj usluzi
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p className="text-lg mb-6">{service.description1}</p>
            <p className="text-lg">{service.description2}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-8 text-[#4f5050]">
                Prednosti naše usluge
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#256eb6]/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-[#256eb6]" />
                    </div>
                    <p className="text-lg text-gray-700">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <img
                  src={service.img}
                  alt="Service benefits"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl transition-opacity duration-300 group-hover:opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#4f5050]">
              Proces izrade
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Naš sistematičan pristup obezbeđuje kvalitet i preciznost u svakom koraku
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {service.processSteps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#256eb6] text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#4f5050]">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#4f5050]">
              Galerija naših radova
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pogledajte neke od naših najboljih projekata i rezultata
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imagePaths.slice(0, 10).map((path, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer border-2 border-transparent hover:border-[#256eb6]/30 transition-all duration-300 hover:shadow-xl"
                onClick={() => openModal(index)}
              >
                <img
                  src={path}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay with zoom icon - visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 transform md:group-hover:scale-110">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                      <ZoomIn className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                {/* Image counter - always visible on mobile */}
                <div className="absolute top-3 right-3 bg-[#256eb6] text-white text-sm px-3 py-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 font-medium shadow-lg">
                  {index + 1} / {imagePaths.length}
                </div>
                {/* Click hint text - always visible on mobile */}
                <div className="absolute bottom-3 left-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-md font-medium">
                    Kliknite za uvećanje
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#4f5050]">
                Često postavljena pitanja
              </h2>
              <p className="text-lg text-gray-600">
                Odgovori na najčešća pitanja o našim uslugama
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg cursor-pointer text-[#4f5050] hover:text-[#256eb6] transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Spremni za saradnju?
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Kontaktirajte nas za besplatnu konsultaciju i detaljnu ponudu za vaš projekat.
            </p>

            {/* Action button */}
            <div className="flex justify-center">
              <Button
                className="bg-[#256eb6] text-white hover:bg-[#1e5a9a] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Kontaktirajte nas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        currentImage={imagePaths[currentImageIndex]}
        onPrevious={goToPrevious}
        onNext={goToNext}
        hasPrevious={currentImageIndex > 0}
        hasNext={currentImageIndex < imagePaths.length - 1}
      />
    </div>
  );
};
